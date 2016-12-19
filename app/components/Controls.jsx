var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    
    onStatusChange: function(newStatus) {
          
    },
    
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('pause')}>Pause</button>
            } else if(countdownStatus === 'pause') {
                return <button className="button primary" onClick={this.onStatusChange('start')>Start</button>
            } 
        };
        
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;