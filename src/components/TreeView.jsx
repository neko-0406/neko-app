import { open } from '@tauri-apps/plugin-dialog';
/**
 * TreeView
 * @param {string} rootPath
 * @returns TreeView Component
 */
export default function TreeView(props) {

    return (
        <>
            <button type="button" onClick={openDialog}>ボタン</button>
        </>
    );
}

async function openDialog() {
    const dir = await open({
        multiple: false,
        directory: false
    });
}