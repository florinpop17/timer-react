var React = require('react');

var CountdownForm = React.createClass({
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;