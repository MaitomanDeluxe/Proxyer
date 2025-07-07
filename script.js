// script.js
document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const proxyButton = document.getElementById('proxyButton');
    // const proxyFrame = document.getElementById('proxyFrame'); // この行は削除されていることを確認

    // ★ここにあなたのCloudflare WorkerのURLを設定してください★
    const WORKER_URL = 'https://yt-audio-api.maikanamaikana.workers.dev/'; 

    // プロキシ処理を実行する関数
    function executeProxy() {
        const targetUrl = urlInput.value.trim();
        if (targetUrl) {
            // WorkerのURLにターゲットURLをクエリパラメータとして付与
            const proxyTarget = `${WORKER_URL}?target=${encodeURIComponent(targetUrl)}`;

            // 新しいタブでプロキシされたコンテンツを開く
            window.open(proxyTarget, '_blank'); 
        } else {
            alert('プロキシしたいURLを入力してください。');
        }
    }

    // ボタンクリックでプロキシを実行
    proxyButton.addEventListener('click', executeProxy);

    // Enterキーでもプロキシを実行できるようにする
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            executeProxy(); // プロキシ実行関数を呼び出す
        }
    });
});
