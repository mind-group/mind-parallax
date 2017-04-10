import React, { Component } from 'react'

import s                    from './App.css'

import { Flex }             from 'mind-flex'

import Parallax             from 'components/Parallax'

class App extends Component {
  render() {
    return (
      <div className={ s.root }>
        <Parallax>

          <Parallax.Layer offset={ 0 } size={ 400 } speed={ 1 }>
            <img alt="" src="http://allswalls.com/images/eyes-wallpaper-7.jpg" />
          </Parallax.Layer>

          <Parallax.Layer offset={ 0 } size={ 400 } speed={ 0.5 }>
            <Flex fluid middle style={{ height: `100%` }}>
              <Flex center fluid>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Flex>
            </Flex>
          </Parallax.Layer>

          <Parallax.Layer offset={ 400 } size={ 200 }>
            <img alt="" src="https://pbs.twimg.com/media/C8ulczLWsAAGhv0.jpg" />
          </Parallax.Layer>

          <Parallax.Layer  offset={ 600 } size={ 400 }>
            <img alt="" src="https://pbs.twimg.com/media/C8ulczLWsAAGhv0.jpg" />
          </Parallax.Layer>

        </Parallax>
      </div>
    )
  }
}

export default App
