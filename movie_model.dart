import: 'dart:convert';
class Moviemodel{
    final double popularity;
    final int votecount;
    final bool video;
    final String posterPath;
    final int id;
    final bool adult;
    final String backdropPath;
    final String originalLenguage;
    final String originalTitle;
    final List<int> genreIds;
    final String title;
    final double voteAverage;
    final String owerview;
    final DateTime releaseDate;

const Moviemodel({
    this.popularity,
    this.popularity;
    this.votecount;
    this.video;
    this.posterPath;
    this.id;
    this.adult;
    this.backdropPath;
    this.originalLenguage;
    this.originalTitle;
    this.genreIds;
    this.title;
    this.voteAverage;
    this.owerview;
    this.releaseDate;
})
factory Moviemodel.fromJSON(String str)=>Moviemodel.fromMap(json.code(str));
factory Moviemodel.fromMap(Map<String, dynamic> json)=>