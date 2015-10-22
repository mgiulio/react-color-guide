var
   React = require('react')
   //,ReactDOM = require('react-dom')
   ,Clipboard = require('clipboard')
;

var Colors = React.createClass({

   render: function() {
      var swatches = this.props.swatches.map(s =>
         <li className="swatch" key={s.code.substring(1)}>
            <div className="sample" style={{backgroundColor: s.code}}></div>
            <h2 className="name">{s.name || s.code}</h2>
            <ul className="codes">
               <li className="code hex" data-clipboard-text={s.code}>
                  <span className="label">{s.code}</span>
                  <span className="notify">Copied</span>
               </li>
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
      var clipboard = new Clipboard('.code');

      clipboard.on('success', function(e) {
         var el = e.trigger;

         e.clearSelection();

         el.classList.add('notify');
      });

      //ReactDOM.findDOMNode(this)
      this.getDOMNode()
      .addEventListener('animationend', function(e) {
         e.target.classList.remove('notify');
      }, false);

      /*
      clipboard.on('error', function(e) {
         console.error('Action:', e.action);
         console.error('Trigger:', e.trigger);
      });
      */
   }

});

module.exports = Colors;
