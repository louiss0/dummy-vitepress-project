# For

```tsx
<For of={iterable}>
    {
        (value:unknown, info: IterationInfo, key:unknown) => unknown
    }
</For>
```

The for component is a for loop that relies on an iterable. It creates a for loop that passes a function that has three parameters.

- The value
- The IterationInfo
- The key.

What ever is returned from the callback is rendered as HTML.

## Props

### Of

### Children
