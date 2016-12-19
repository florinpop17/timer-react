var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'pause'
        }
    },
    
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'pause':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },
    
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            
            this.setState({
                count: newCount
            });
                        
        }, 1000);  
    },
    
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    
    handleStatusChange: function(newStatus) {
        this.setState({
            countdownStatus: newStatus 
        });
    },
    
    render: function() {
        var {count, countdownStatus} = this.state;
        
        return (
            <div>
                <h1 className="text-center">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;