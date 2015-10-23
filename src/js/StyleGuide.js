var
   React = require('react')
   ,ColorGuide = require('./ColorGuide')
   colorSchemes = require('./colorSchemes')
;

var StyleGuide = React.createClass({

   render: function() {
      var colorGuides = colorSchemes.map(cs =>
         <section className="color-guide" key={cs.name}>
            <h2 className="title">{cs.name}</h2>
            <ColorGuide colors={cs.colors} />
         </section>
      );

      return (
         <div className="page-wrap">
            {colorGuides}
         </div>
      );
   }

});

module.exports = StyleGuide;
