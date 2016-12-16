var React = require('react');

var Clock = React.createClass({
    formatSeconds: function(totalSeconds) {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        
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