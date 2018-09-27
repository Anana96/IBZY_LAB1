import React, { Component } from 'react';
import './App.css'

class Code extends  Component {
    method = this.props.method;
    nameForm = this.props.nameForm;

    render () {
        return (
       <div className="code-form">
       <h2>{this.nameForm}</h2>
       <label>
           <h4>Исходная строка:</h4>
           <input type="text" className={this.method+'-input'}/>
       </label>
       <h4>Перестановки:</h4>
       <label className="label-shift">
           Строки:
           <br/>
           <input type="text"className={this.method+'-row'}/>
       </label>
       <label className="label-shift">
           Столбцы:
           <br/>
           <input type="text"className={this.method+'-col'}/>
       </label>

       <button className={this.method+'-result-button result-button'}>Результат</button>
       <button className={this.method+'-clear-button clear-button'}>Очистить</button>
       <label>
           <h4>Выходная строка:</h4>
           <input type="text" className={this.props.method+'-output'}/>
       </label>
       </div>
        );
    }
}

class TransferWord extends Component {
    render (){
        return(
            <button className={'transfer-button'}>{this.props.symbol}</button>
        );
    }
}


class App extends Component {
  render() {
    return (
      <div className="forms-code-decode">
        <Code nameForm={'Кодирование информации'} method ={'code'}/>
        <Code nameForm={'Раскодирование информации'} method ={'decode'}/>
        <TransferWord symbol={'\u2192'}/>
        <TransferWord symbol={'\u2190'}/>
      </div>
    );
  }
}

export default App;
