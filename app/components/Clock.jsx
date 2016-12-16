var React = require('react');

var Clock = React.createClass({
    formatSeconds: function(totalSeconds) {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        
        return minutes + ':' + seconds;
    },
    
    render: function() {
        return (
            <div>
                <p>Clock component</p>
            </div>
        );
    }
});

module.exports = Clock;