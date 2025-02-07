document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1).toUpperCase(),e.placeholder=t.textContent,e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.d8b9a1f0.js.map
