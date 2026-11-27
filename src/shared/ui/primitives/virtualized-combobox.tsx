'use client'

import * as React from 'react'
import { Combobox as ComboboxPrimitive } from '@base-ui/react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { cn } from 'cn'

import { ComboboxItem } from '@/shared/ui/primitives/combobox'

type Virtualizer = ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>

const VirtualizerRefContext = React.createContext<React.RefObject<Virtualizer | null> | null>(null)

function useVirtualizerRef() {
  const ref = React.useContext(VirtualizerRefContext)
  if (!ref) {
    throw new Error('VirtualizedComboboxList must be used inside VirtualizedCombobox')
  }
  return ref
}

function VirtualizedCombobox<Value, Multiple extends boolean | undefined = false>({
  onItemHighlighted,
  ...props
}: ComboboxPrimitive.Root.Props<Value, Multiple>) {
  const virtualizerRef = React.useRef<Virtualizer | null>(null)

  const handleItemHighlighted: ComboboxPrimitive.Root.Props<
    Value,
    Multiple
  >['onItemHighlighted'] = (item, eventDetails) => {
    const virtualizer = virtualizerRef.current
    const { reason, index } = eventDetails

    if (item !== undefined && virtualizer) {
      const isStart = index === 0
      const isEnd = index === virtualizer.options.count - 1
      const shouldScroll = reason === 'none' || (reason === 'keyboard' && (isStart || isEnd))

      if (shouldScroll) {
        queueMicrotask(() => {
          virtualizer.scrollToIndex(index, { align: isEnd ? 'start' : 'end' })
        })
      }
    }

    onItemHighlighted?.(item, eventDetails)
  }

  return (
    <VirtualizerRefContext.Provider value={virtualizerRef}>
      <ComboboxPrimitive.Root virtualized onItemHighlighted={handleItemHighlighted} {...props} />
    </VirtualizerRefContext.Provider>
  )
}

function VirtualizedComboboxList<Value>({
  children,
  estimateSize = 28,
  className,
  itemClassName,
}: {
  children: (item: Value) => React.ReactNode
  estimateSize?: number
  className?: string
  itemClassName?: string
}) {
  const virtualizerRef = useVirtualizerRef()
  const filteredItems = ComboboxPrimitive.useFilteredItems<Value>()
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null)

  const virtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => estimateSize,
    overscan: 20,
    paddingStart: 4,
    paddingEnd: 4,
    scrollPaddingStart: 4,
    scrollPaddingEnd: 4,
  })

  React.useImperativeHandle(virtualizerRef, () => virtualizer)

  const handleScrollElementRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element
      if (element) {
        virtualizer.measure()
      }
    },
    [virtualizer]
  )

  const totalSize = virtualizer.getTotalSize()

  return (
    <ComboboxPrimitive.List data-slot="combobox-list" className={cn('p-0', className)}>
      {filteredItems.length > 0 && (
        <div
          role="presentation"
          ref={handleScrollElementRef}
          className="no-scrollbar h-[min(calc(--spacing(72)-(--spacing(9))),var(--total-size))] max-h-(--available-height) overflow-y-auto overscroll-contain px-1"
          style={{ '--total-size': `${totalSize}px` } as React.CSSProperties}
        >
          <div role="presentation" className="relative w-full" style={{ height: totalSize }}>
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const item = filteredItems[virtualItem.index]
              if (item === undefined) return null

              return (
                <ComboboxItem
                  key={virtualItem.key}
                  index={virtualItem.index}
                  data-index={virtualItem.index}
                  ref={virtualizer.measureElement}
                  value={item}
                  className={itemClassName}
                  aria-setsize={filteredItems.length}
                  aria-posinset={virtualItem.index + 1}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  {children(item)}
                </ComboboxItem>
              )
            })}
          </div>
        </div>
      )}
    </ComboboxPrimitive.List>
  )
}

export { VirtualizedCombobox, VirtualizedComboboxList }
