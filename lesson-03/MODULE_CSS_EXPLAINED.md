# MODULE CSS

`FILE_NAME_` + `className` + `_` + `BASE64CODE(like random string)`

`Person.module.css`

```javascript
.user {
  color: red;
}
```

`.Person_user_5gd5k`

## Actual object

```javascript
style = {
	user: 'Person_user_5gd5k',
};
```

## Import

`import style from './Person.module.css';`

## Usage

`<div className={style.user} ></div>`
