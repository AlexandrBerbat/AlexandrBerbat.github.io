// import React from 'react';

const Menu = ({ content }) => {
    console.log(content);

    const contentToHtml = (content) => {
        let resultHtml = `<nav><ul class="topmenu">`;

        for (let i = 0; i < content.length; i++) {
            if (!content[i].submenu) {
                resultHtml += `<li><a href=${content[i].url}>${content[i].name}</a></li>`

            } else {
                resultHtml += `<li><a href="">${content[i].name}</a><ul class="submenu">`;

                for (let a = 0; a < content[i].submenu.length; a++)
                {
                    resultHtml += `<li><a href=${content[i].submenu[a].url}>${content[i].submenu[a].name}</a></li>`;
                }

                resultHtml += "</ul></li>"
                
            }

        }

        resultHtml += `</ul></nav>`;

        return resultHtml;
    }

    return (
        <main dangerouslySetInnerHTML={{ __html: contentToHtml(content) }}></main>

    );
}

export default Menu;