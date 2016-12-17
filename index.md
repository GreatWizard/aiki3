---
layout: page-with-side
title: Pratiquer l'aïkido à Troyes
link: Accueil
linkOrder: 0
---

## Qui sommes-nous ?

![Aiki3]({{ '/assets/mcz_small.jpg' | relative_url }})

L'Aiki3 est un club d'aïkido sur Troyes.

Les cours sont assurés par Michel Czerniak, ceinture noire 6e Dan, diplômé d'État (Diplôme n° 75970723).

Le groupe se compose d'une vingtaine de licenciés.

L'Aiki3 est affilié à la [FFAAA](http://www.aikido.com.fr).

<a href="http://www.aikido.com.fr" target="_blank">
  ![Fédération Française Aïkido Aïkibudo et Affinitaires]({{ '/assets/logo_ffaaa.jpg' | relative_url }})
</a>

[Tarifs et conditions d'adhésion]({{ 'club' | relative_url }})

<a href="{{ '/assets/triptyque 2010-2011.pdf' | relative_url }}" target="_blank">Tryptique de présentation de l'Aiki3</a>

## Actualités

{% assign postsSorted = site.posts | sort: '-date' %}
<ul>
  {% for post in postsSorted %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
