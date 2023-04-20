<script>
    export let Humidity
    export let Windspeed
    export let FeelsLike
</script>

<footer>
    <div>
        <span>
            {Humidity}%
        </span>
        <strong>
            Humidity
        </strong>
    </div>

    <div>
        <span>
            {Windspeed} km/h
        </span>
        <strong>
            Windspeed
        </strong>
    </div>

    <div>
        <span>
            {FeelsLike}°
        </span>
        <strong>
            Feels like
        </strong>
    </div>
</footer>

<style>
    footer {
        border: 2px solid #fff;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 32px;
    }

    span {
        display: block;
        font-weight: 600;
        font-size: 14px;
    }

    strong {
        color: white;
        font-size: 14px;
        font-weight: 500;
    }
</style>