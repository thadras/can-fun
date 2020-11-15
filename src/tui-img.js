import React from 'react';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'

const MENU_ARRAY = [ 'shape', 'crop', 'filter', 'flip', 'rotate', 'draw', 'icon', 'mask', 'text'];

const MAX_WIDTH = 960;
const MAX_HEIGHT = 800;
const PERCENT_WIDTH = 0.8;
const PERCENT_HEIGHT = 0.8;


export function theApiEditor(callback) {
    console.log('useApiEditor');
    return (<>
            <button onClick={() => callback('x')}>Flip by X Axis!</button>
            <button onClick={() => callback('y')}>Flip by Y Axis!</button>
    </>);
}

export default class TuiImageEditor extends React.Component {
    ref = React.createRef(null);
    imageEditorOptions = {
        cssMaxWidth: MAX_WIDTH,
        cssMaxHeight: MAX_HEIGHT,
        selectionStyle: {
            cornerSize: 20,
            rotatingPointOffset: 70
        },
        usageStatistics: false,
        includeUI: {
            menu: MENU_ARRAY,
            menuBarPosition: 'bottom',
            uiSize: {
                width: '100%',
                height: '100vh'
              },
              loadImage: {
                path: process.env.PUBLIC_URL + '/img/hill.jpg',
                name: 'SampleImage'
            },
        },
        initMenu: 'filter',
    };
    componentDidMount() {
        this.bindWindowResize();
        this.initState();
        console.log(this.instance);
    }
     
    shouldComponentUpdate(np, pp) {
        console.groupCollapsed('instance sCU')
        console.log(this.instance)

        console.log(np)
        console.log(pp)

        console.log(this.props)
        console.groupEnd()
        return true;

    }

    initState() {
        const { innerHeight, innerWidth } = window;
        const width = PERCENT_WIDTH * innerWidth;
        const height = PERCENT_HEIGHT * innerHeight;
        console.log(this.state);
        this.setState({
            width,
            height,
        })

    }
    handleClickButton = (op) => {
        const editorInstance = this.ref.current.getInstance();
        console.log(`button click with op ${op}`)
        switch (op) {
            case 'x': 
                editorInstance.flipX();
                break;
            case 'y': 
                editorInstance.flipY();
                break;
            default:
        }
    };

    bindWindowResize() {
        window.onresize = (e) => {
            const editorInstance = this.ref.current.getInstance();
            this.initState();
            console.groupCollapsed(`resizing eI: ${Object.keys(editorInstance)}`)
            console.log(editorInstance)
            console.log(this);
            console.log(e);
            console.groupEnd()
            editorInstance.ui.resizeEditor();
        };
        console.log(this)
    }

    render() {
   
   if (this.ref.current !== null ) {
    console.log(`re-init-tui ref`);
    this.bindWindowResize();
    //console.log();

   } else {
       console.log('no element')
   }

    return (<>
        <ImageEditor
            ref={this.ref} 
            {...this.imageEditorOptions} 
        />
        {/* {this.ref && theApiEditor(this.handleClickButton)} */}
    </>);
    }
};
