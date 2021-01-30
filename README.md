# Reproduces [Storybook issue #13633](https://github.com/storybookjs/storybook/issues/13633)

## Setup

```
npm install
```

## Run

```
npm run storybook
```

## STR

1. Navigate to Modal/Demo in Storybook

Expected:

* Modal is rendered once

Actual:

* Modal is rendered twice. Click cancel or ok and see second modal sitting behind the first.
