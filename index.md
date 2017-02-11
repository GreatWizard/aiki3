---
layout: page-side
---
<div class="side-image side-image--xl">
  <div class="side-image__image">
    <img src="{{ '/assets/logo_aiki3_complete.png' | relative_url }}" alt="Aiki3" title="Aiki3" />
  </div>
  <div class="side-image__content">
    <h1>Pratiquer l'aïkido à Troyes</h1>
    <p>L'Aiki3 est un club d'aïkido à Troyes.</p>
    <p>Les cours sont assurés par Michel Czerniak, ceinture noire 6e Dan.</p>
    <p>Le groupe se compose d'une vingtaine de licenciés.</p>
    <p>L'Aiki3 est affilié à la <a href="http://www.aikido.com.fr" target="_blank"><strong>FFAAA</strong></a>.</p>
  </div>
</div>

# Actualités

{% assign postsSorted = site.posts | sort: '-date' %}
<ul>
  {% for post in postsSorted %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
