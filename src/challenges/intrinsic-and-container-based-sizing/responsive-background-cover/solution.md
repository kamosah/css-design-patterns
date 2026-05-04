# Solution: Responsive Background Cover

`width: 100%` and `height: 300px` define the visible area for the hero section. Once the container has dimensions, the browser can size the background image relative to that box.

`background-image` assigns a generic placeholder image, `background-size: cover` tells the browser to scale the image until the entire container is filled, and `background-position: center` keeps the image centered as the container changes size.

Because `cover` preserves the image's aspect ratio, the image is never distorted. If the container and image ratios differ, the browser crops the excess while still covering the full hero area.
