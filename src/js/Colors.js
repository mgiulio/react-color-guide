var
   React = require('react')
   ,Clipboard = require('clipboard')
;

var Colors = React.createClass({

   render: function() {
      var swatches = this.props.swatches.map(s =>
         <li className="swatch" key={s.code.substring(1)}>
            <div className="sample" style={{backgroundColor: s.code}}></div>
            <h2 className="name">{s.name || s.code}</h2>
            <ul className="codes">
               <li className="code hex" data-clipboard-text={s.code}>{s.code}</li>
            </ul>
         </li>
      );

      return (
         <ul className="colors">
            {swatches}
         </ul>

      );
   },

   componentDidMount: function() {
      new Clipboard('.code');
   }

});

module.exports = Colors;
