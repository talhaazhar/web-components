# Web Components

**Note:** document.registerElement is deprecated and will be removed in M80, around February 2020. Please use window.customElements.define instead. See https://www.chromestatus.com/features/4642138092470272 and https://developers.google.com/web/updates/2019/07/web-components-time-to-upgrade for more details.

### About
Just a little project I started to introduce myself to the world of web-components, so that I can learn it to develop a project for my job

The main component created is the __glossary-container__. The **glossary-container** itself uses two components, 
  **rit-glossary1** and **glossary-search**
  
### Usage
Web Components make life a lot easier. For example, the code below represents the efforts required to create a glossary entry without a web-component:

``` html
<div class="term w1">
 <li role="listitem">
  <p><span style="font-weight: bold;">
   <a href="#">Character Artist</a>: 
    </span>Responsible for creating humanoids, aliens, or other characters in the game. 
    <span style="font-style: italic;">(W1, Visual Art)</span>
  </p>
 </li>
</div>
```

On the other hand, here is the quote required to create a glossary entry with a web-component:

``` html
<rit-glossary1 
        word = "Character Artist" 
        definition = "Responsible for creating humanoids, aliens, or other characters in the game."
        chapter = "(W1, Visual Art)">
 </rit-glossary1>

```


