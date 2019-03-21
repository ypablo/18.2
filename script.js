var movies = [
  {
    id: 1,
	title: 'Harry Potter',
    desc: 'Film o czarodzieju',
	image: 'potter.jpg'
  },
  {
	id: 2,  
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	image: 'lew.jpg'
  },
  {
	id: 3,  
    title: 'Forrest Gump',
    desc: 'Film o przygodach autystyka',
	image: 'forrest.jpg'
  },
  {
	id: 4,  
    title: 'Private Ryan',
    desc: 'Film o II Wojnie Światowej',
	image: 'ryan.jpg'
  },
  {
	id: 5,  
    title: 'Pulp Fiction',
    desc: 'Film o gangsterach',
	image: 'pulp.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('img',{src:movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));



	