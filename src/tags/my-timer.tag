<my-timer>
    <span>{hours}:{minutes}:{seconds}</span>

    <style scoped>
    :scope {
        display: inline-block;
        background: lavender;
        font-family: Roboto;
        font-size: 20px;
        padding:5px 10px;
    }
    </style>

    <script>
    function leftPad(value, length, str) {
        if (value.length >= length) {
			return value;
		}
		str = str || ' ';
		return (new Array(Math.ceil((length - value.length) / str.length) + 1).join(str)).substr(0, (length - value.length)) + value;
    }

    this.tick = () => {
        const date = new Date();
        this.seconds = leftPad(date.getSeconds()+'',2,'0');
        this.minutes = leftPad(date.getMinutes()+'',2,'0');
        this.hours = leftPad(date.getHours()+'',2,'0');
        this.update();
    }

    let timer = setInterval( this.tick, 1000);

    this.on('mount', () => {
        this.tick();
    });

    this.on('unmount', () => {
        clearInterval(timer)
    });
    </script>
</my-timer>
