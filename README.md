## react-native-alerts-help

> Atualmente, o desempenho não é testado no IOS.

<br />
### react-native-alerts-help

Minha primeira lib para react-native!

#### Demostração da lib

![](./demostration.gif)

### Instalação

React-native-alerts-help usa react-native-vector-icons como dependencia.

instalação:

```bash
npm install react-native-alerts-help
```

link:

```bash
react-native link
```

### Usage

```js
import Alert from 'react-native-alerts-help';

<Alert
 visible={this.state.warning}
 onPress={() => this.close()}
 icon="warning"
 color="#f1c40f"
 title="Warning.."
 text="Fill in all the fields below."
 textButton="Close"
/>
```


### Props

| name               | type          | description                              |
| :----------------- | :------------ | :--------------------------------------- |
| visible            | bool          | Para que o modal seja visivel.           |
| icon               | string        | Nome do icone FontAwesome https://oblador.github.io/react-native-vector-icons/            |
| color              | string        | Cor hexadecimal para o botão e icone        |
| title              | string        | Texto de titulo                          |
| text               | string        | Texto do corpo da alerta                 |
| textButton         | string        | Texto do botão                           |

<br />

__event:__

| name               | type     | description                              |
| :----------------- | :------- |  :-------------------------------------- |
| OnClose            | function | Ao fechar a alerta.                      |
| OnPress            | function | Quando clica no botão.                   |
