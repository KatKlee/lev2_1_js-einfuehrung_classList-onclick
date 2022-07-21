const bucket = document.getElementById('bucket')

function changeHeadline() {
    bucket.classList.add('fontStylingBucket')
}

function resetHeadline() {
    if (bucket.classList.contains('fontStylingBucket')) {
        bucket.classList.remove('fontStylingBucket')
    }
}