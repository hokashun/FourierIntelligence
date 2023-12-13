window.$docsify = {
    // Other Docsify configuration options

    afterEach: function (content) {
        // Check if the breadcrumb script tag exists in the content
        if (/<script type="text\/breadcrumb"/.test(content)) {
            // Generate the breadcrumb based on the current page's URL
            var breadcrumb = '';
            var parts = location.pathname.split('/');
            parts.shift(); // Remove the first empty part
            for (var i = 0; i < parts.length; i++) {
                var link = '/' + parts.slice(0, i + 1).join('/');
                var text = parts[i];
                breadcrumb += ' / <a href="' + link + '">' + text + '</a>';
            }

            // Replace the breadcrumb placeholder in the content with the generated breadcrumb
            content = content.replace(/<div class="breadcrumb">([\s\S]*?)<\/div>/, '<div class="breadcrumb">' + breadcrumb + '</div>');
        }

        return content;
    }
};
