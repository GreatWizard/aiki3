---
layout: page-with-side
---

<div class="side-image">
 <div class="side-image__image">
   <img src="{{ '/assets/logo_aiki3_complete.png' | relative_url }}" alt="Aiki3" />
 </div>
 <div class="side-image__content">
   <h1>Pratiquer l'aïkido à Troyes</h1>
   <p>L'Aiki3 est un club d'aïkido à Troyes.</p>
   <p>Les cours sont assurés par Michel Czerniak, ceinture noire 6e Dan.</p>
   <p>Le groupe se compose d'une vingtaine de licenciés.</p>
   <p>L'Aiki3 est affilié à la <a href="http://www.aikido.com.fr" target="_blank"><strong>FFAAA</strong></a>.</p>
 </div>
</div>

<!--<a href="http://www.aikido.com.fr" target="_blank">
  ![Fédération Française Aïkido Aïkibudo et Affinitaires]({{ '/assets/logo_ffaaa.jpg' | relative_url }})
</a>

[Tarifs et conditions d'adhésion]({{ 'club' | relative_url }})

<a href="{{ '/assets/triptyque 2010-2011.pdf' | relative_url }}" target="_blank">Tryptique de présentation de l'Aiki3</a>-->

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
