<template>
    <div>
        <div id="overview">
            <div id="main">
                <day-select :selected="day"></day-select>
                <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
                <movie-filter></movie-filter>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieList from "./MovieList";
    import MovieFilter from "./MovieFilter";
    import DaySelect from "./DaySelect";

    export default {
        props:['genre','time','movies','day'],
        components:{
            'movie-list':MovieList,
            'movie-filter':MovieFilter,
            'day-select':DaySelect
        }
    }
</script>

<style scoped>

</style>