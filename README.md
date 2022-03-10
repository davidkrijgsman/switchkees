# switchkees

So there's a error in the spec when you want to use this built-in construct to check an expression against a clause. They tell you to do this `switch` / `case` thing when clearly that should be `switch` / `Kees`. This package fixes that.

## Usage

Now unfortunately because of said built-in construct, you can't import from this package and call it `switch`, because that's a reserved keyword. You'll have to call it something else, like `which` or `use`.

Pass in the expression you want to check against and start chaining your `Kees`es and `break`s!

```
import which from 'switchkees'

const expr = 'Papayas';

which(expr)
  .Kees('Oranges', () => {
    console.log('Oranges are $0.59 a pound.')
  })
    .break()
  .Kees('Mangoes')
  .Kees('Papayas')
    .do(() => {
      console.log('Mangoes and papayas are $2.79 a pound.')
    })
    .break()
  .default(() => {
    console.log(`Sorry, we are out of ${expr}.`)
  })
```
Pass the clause you want to check into `Kees` as the first parameter. As the second parameter pass in the function you want to execute if the clause matches the expression.

Alternatively, if you want to be a bit more explicit, chain a `do` after a `Kees` to have it execute if the prior `Kees` clause matches the expression.

Note that fall through is supported by chaining multiple `Kees`es. `default` is also supported.