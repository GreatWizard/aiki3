---
layout: page-side
---
<div class="side-image">
  <div class="side-image__header">
    <h1>Pratiquer l'aïkido à Troyes</h1>
  </div>
  <div class="side-image__image">
    <img src="{{ '/assets/logo_aiki3_complete.png' | relative_url }}" alt="Aiki3" title="Aiki3" />
  </div>
  <div class="side-image__content">
    <p>L'Aiki3 est un club d'aïkido à Troyes.</p>
    <p>Les cours sont assurés par <strong>Michel Czerniak</strong>, ceinture noire 6e Dan.</p>
    <p>Le groupe se compose d'une vingtaine de licenciés.</p>
    <p>L'Aiki3 est affilié à la <a href="http://www.aikido.com.fr" target="_blank"><strong>FFAAA</strong></a>.</p>
  </div>
</div>

# Actualités

{% assign postsSorted = site.posts | sort: '-date' %}
<ul>
  {% for post in postsSorted %}
    <li>
      <p>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
