---
layout: default
link: Liens
linkOrder: 40
links:
  - title: Site de Patrick Bénézi
    url: http://www.aikido-benezi.com
    image: /assets/link_benezi.jpg
  - title: Site de la FFAAA
    url: http://www.aikido.com.fr
    image: /assets/link_ffaaa.png
  - title: Site de Maître Christian Tissier
    url: http://www.christiantissier.com
    image: /assets/link_tissier.jpg
  - title: Site de Maître Yamaguchi
    url: http://www.yamaguchi-aikido.com/html/menu.html
    image: /assets/link_yamaguchi.jpg
  - title: Site du TOS KARATE-DO
    url: http://www.toskarate.com
    image: /assets/link_toskarate.jpg
docs:
  - title: Tryptique de présentation de l'Aiki3 (pdf)
    url: /assets/triptyque 2010-2011.pdf
  - title: Le planning des stages 2016-2017 de Patrick Bénézi (pdf)
    url: http://www.aikido-benezi.com/graphics/stage2016-2017/planning%202016-2017.pdf
---

{% if page.links %}
  <div class="links">
    {% for node in page.links %}
      <div class="links__link">
        <a href="{{ node.url }}" target="_blank">
          <img src="{{node.image | relative_url}}" alt="{{ node.title }}" title="{{ node.title }}" />
          <br />
          {{ node.title }}
        </a>
      </div>
    {% endfor %}
  </div>
{% endif %}

<div class="container">
  <div class="container__full">
    {% if page.docs %}
      <h4>Documents à télécharger</h4>
      <ul>
        {% for node in page.docs %}
          <li>
            {{ node.title }} : <a href="{{ node.url }}" target="_blank">Télécharger</a>
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>
</div>
