export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaDestacadas:Array<Noticias>=[
  { id:100,
    idCategoria:1,
    titulo:"Noticia Destacada 1",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque."
  },
  { id:101,
    idCategoria:2,
    titulo:"Noticia Destacada 2",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque."
  },
  { id:102,
    idCategoria:3,
    titulo:"Noticia Destacada 3",
    autor:"autor noticia 3",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque."
  },

]

export let ListaNoticias:Array<Noticias>=[
{ id:1,
  idCategoria:1,
  titulo:"Noticia 1",
  autor:"autor noticia 1",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. "
},

{ id:2,
    idCategoria:2,
    titulo:"Noticia 2",
    autor:"autor noticia 2",
    fecha:Date().toString(),
    imagen:"imagen2.png",
    texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. "
},

{ id:3,
  idCategoria:3,
  titulo:"Noticia 3",
  autor:"autor noticia 3",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. "
},

{ id:4,
  idCategoria:4,
  titulo:"Noticia 4",
  autor:"autor noticia 4",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. "
},

{ id:5,
  idCategoria:5,
  titulo:"Noticia 5",
  autor:"autor noticia 5",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor."
},

{ id:6,
  idCategoria:6,
  titulo:"Noticia 6",
  autor:"autor noticia 6",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor."
},
];
