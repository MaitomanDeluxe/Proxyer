document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const proxyButton = document.getElementById('proxyButton');
    const proxyFrame = document.getElementById('proxyFrame');

    // ★★★ ここにあなたのCloudflare WorkerのURLを設定してください ★★★
    const WORKER_URL = 'https://yt-audio-api.maikanamaikana.workers.dev/'; 

    proxyButton.addEventListener('click', () => {
        const targetUrl = urlInput.value.trim();
        if (targetUrl) {
            // WorkerのURLにターゲットURLをクエリパラメータとして付与
            const proxyTarget = `${WORKER_URL}?target=${encodeURIComponent(targetUrl)}`;
            proxyFrame.src = proxyTarget;
        } else {
            alert('プロキシしたいURLを入力してください。');
        }
    });

    // Enterキーでもプロキシを開始できるようにする
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            proxyButton.click();
        }
    });
});
