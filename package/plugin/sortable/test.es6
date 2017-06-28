/**
 * Created by Administrator on 2017/6/26 0026.
 */
import Sortable from './sortable.es6';
var container = document.getElementById("foo");
var sort = Sortable.create(container, {
    animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
    handle: "li", // Restricts sort start click/touch to the specified element
    draggable: "li", // Specifies which items inside the element should be sortable
    onUpdate: function (evt/**Event*/){
        return false;
        // var item = evt.item; // the current dragged HTMLElement
    }
});
