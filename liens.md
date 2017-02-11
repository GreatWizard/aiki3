---
layout: page-full
link: Liens
linkOrder: 40
links:
  - title: Le site de Patrick Benezi
    url: http://www.aikido-benezi.com
    image: /assets/link_benezi.png
  - title: Le site officiel de la FFAAA
    url: http://www.aikido.com.fr
    image: /assets/link_ffaaa.png
  - title: Le site officiel de Maître Christian Tissier
    url: http://www.christiantissier.com
    image: /assets/link_tissier.png
  - title: Le site officiel de Maître Yamaguchi
    url: http://www.yamaguchi-aikido.com/html/menu.html
    image: /assets/link_yamaguchi.jpg
  - title: Le site web du TOS KARATE-DO (dojo)
    url: http://www.toskarate.com
    image: /assets/link_toskarate.png
---

# A consulter

{% if page.links %}
  <div class="links">
    {% for node in page.links %}
      <a href="{{ node.url }}" target="_blank">
        <img src="{{ node.image }}" alt="{{ node.title }}" alt="{{ node.title }}" />
      </a>
    {% endfor %}
  </div>
{% endif %}

# Documents à télécharger

- <a href="/assets/triptyque 2010-2011.pdf" target="_blank">Tryptique de présentation de l'Aiki3</a>

- <a href="http://www.aikido-benezi.com/graphics/stage2016-2017/planning%202016-2017.pdf" target="_blank">Le planning des stages 2016-2017 de Patrick Benezi (au format PDF)</a>
