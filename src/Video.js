import React from 'react';

class Video extends React.Component {

    render() {
        return (
          <div class="bd-example-snippet bd-code-snippet">
            <div class="bd-example">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MaQNgSGjYBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        );
      }
}

export default Video;