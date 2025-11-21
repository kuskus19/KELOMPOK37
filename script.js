document.addEventListener('DOMContentLoaded', function() {
    const flowSteps = document.querySelectorAll('.flow-steps .step');
    const flowContents = document.querySelectorAll('.flow-content-area .flow-content');

    // Fungsi untuk menampilkan konten yang sesuai
    function showContent(targetId) {
        // Hapus class 'active' dari semua step dan konten
        flowSteps.forEach(step => step.classList.remove('active'));
        flowContents.forEach(content => content.classList.remove('active'));

        // Tambahkan class 'active' ke step dan konten yang diklik
        const activeStep = document.querySelector(`.flow-steps .step[data-id="${targetId}"]`);
        const activeContent = document.getElementById(targetId + '-content');

        if (activeStep && activeContent) {
            activeStep.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Tambahkan event listener ke setiap step
    flowSteps.forEach(step => {
        step.addEventListener('click', function() {
            const targetId = this.getAttribute('data-id');
            showContent(targetId);
        });
    });

    // Tampilkan konten default (step 1) saat halaman dimuat
    showContent('step1');

    // --- LOGIKA DASHBOARD LAMA DIHAPUS DARI SINI ---
});