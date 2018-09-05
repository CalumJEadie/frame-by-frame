# Test Suite

## Set Up

Disable any existing frame by frame extensions.
chrome://extensions/
Load unpacked extension.
Select "extension" directory.

## Test - Loading

### Home page

Open https://www.youtube.com/

Open first video

Expect: Frame by frame to have loaded

### Search

Open https://www.youtube.com/

Search "Giant 6ft Water Balloon"

Open first video

Expect: Frame by frame to have loaded

### Side bar

Open https://www.youtube.com/

Search "Giant 6ft Water Balloon"

Open first video

Open first video in results to the left

Expect: Frame by frame to have loaded

### Channel

Open https://www.youtube.com/user/theslowmoguys

Open first video on page

Expect: Frame by frame to have loaded

### Direct

Open https://www.youtube.com/watch?v=j_OyHUqIIOU

Expect: Frame by frame to have loaded

## Test - On Screen UX

Open https://www.youtube.com/watch?v=j_OyHUqIIOU

Check UI appears

- Back one frameskip
- Forward one frameskip

Check "back one frameskip".

Check "forward one frameskip".