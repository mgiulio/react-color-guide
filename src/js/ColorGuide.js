var
   React = require('react')
   //,ReactDOM = require('react-dom')
   ,tinycolor = require('tinycolor2')
   ,Clipboard = require('clipboard')
;

var ColorGuide = React.createClass({

   render: function() {
      var swatches = this.props.colors.map(s => {
         var
            c = tinycolor(s.code),
            hex = c.toHexString(),
            rgb = c.toRgbString(),
            hsl = c.toHslString()
         ;

         return (
            <li className="swatch" key={s.code.substring(1)}>
               <div className="sample" style={{backgroundColor: s.code}}></div>
               <h2 className="name">{s.name || s.code}</h2>
               <ul className="codes">
                  <li className="code hex" data-clipboard-text={hex}>
                     <span className="label">{hex}</span>
                     <span className="notify">Copied</span>
                  </li>
                  <li className="code rgb" data-clipboard-text={rgb}>
                     <span className="label">{rgb}</span>
                     <span className="notify">Copied</span>
                  </li>
                  <li className="code hsl" data-clipboard-text={hsl}>
                     <span className="label">{hsl}</span>
                     <span className="notify">Copied</span>
                  </li>
               </ul>
            </li>
         );
      });

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

module.exports = ColorGuide;
