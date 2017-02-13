---
layout: page-full
link: Le club
linkOrder: 20
gallery:
  - title: Michel à droite, professeur de l'Aiki3
    url: /assets/gallery_aiki1.jpg
    width: 479
    height: 328
  - title: Kokyu Nage (projection)
    url: /assets/gallery_aiki2.jpg
    width: 400
    height: 330
  - title: Shihoo Nage (projection)
    url: /assets/gallery_aiki3.jpg
    width: 400
    height: 330
  - title: Hiji Kime Osae
    url: /assets/gallery_aiki4.jpg
    width: 400
    height: 327
  - title: Nikyo
    url: /assets/gallery_aiki5.jpg
    width: 400
    height: 330
css:
  - photoswipe
js:
  - photoswipe
  - init-gallery
---
# Présentation

L'Aiki3 est un club d'aïkido à Troyes. Il existe depuis 1993.

Le groupe se compose d'une vingtaine de licenciés de niveaux très variés. Certains membres sont encore débutants, d'autres ont derrière eux de nombreuses années de pratique.

Les entrainements ont lieu au moins deux fois par semaine dans les salles de combat mise à disposition du groupe.

# Enseignement

<div class="side-image">
  <div class="side-image__image">
    <img src="{{'/assets/club_mcz.jpg' | relative_url}}" alt="Michel Czerniak" title="Michel Czerniak" />
  </div>
  <div class="side-image__content">
    <p>Les cours sont assurés par <strong>Michel Czerniak</strong>, ceinture noire 6e Dan, diplômé d'État (Diplôme n° 75970723).</p>
    <p>La pratique à l'Aiki3 est essentiellement influencée par l'enseignement de <strong><a href="ttp://www.aikido-benezi.com" target="_blank">Patrick Benezi</a></strong>, ceinture noire, Shihan 7e Dan, qui enseigne à Paris et dirige des stages au Cercle Tissier à Vincennes et dans toute la France.</p>
  </div>
</div>

# Galerie

{% include photoswipe.html %}

<div class="gallery">
  {% for image in page.gallery %}
    <a href="{{image.url | relative_url}}" data-size="{{image.width}}x{{image.height}}" data-title="{{image.title}}">
      <img class="gallery__image{% if forloop.index0 == 0 %} gallery__image--large{% endif %}" src="{{image.url | relative_url}}" alt="{{image.title}}" title="{{image.title}}" />
    </a>
  {% endfor %}
</div>
