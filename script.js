document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const proxyButton = document.getElementById('proxyButton');
    const proxyFrame = document.getElementById('proxyFrame');

    // ★ここにCloudflare WorkerのURLを設定してください★
    // 例: const WORKER_URL = 'https://your-worker-subdomain.your-domain.workers.dev';
    const WORKER_URL = 'https://YOUR_WORKER_URL_HERE'; 

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
