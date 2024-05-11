module.exports = ({ env }) => ({
  // ...
  
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {

        enableEtagSupport: true,
        logs: true,
        clearRelatedCache: true,
        maxAge: Infinity,
        contentTypes: [
          // list of Content-Types UID to cache
          "api::post.post",
          "api::bai-viet-noi-bat.bai-viet-noi-bat",
          "api::shopping.shopping",
          "api::tac-gia.tac-gia",
          "api::comment.comment",
          {
            contentType: "api::post.post",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            // // @ts-ignore
            // maxAge: 18000,
            method: "GET",
          },
          {
            contentType: "api::bai-viet-noi-bat.bai-viet-noi-bat",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            // // @ts-ignore
            // maxAge: 18000,
            method: "GET",
          },
          {
            contentType: "api::shopping.shopping",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            // // @ts-ignore
            // maxAge: 18000,
            method: "GET",
          },
          {
            contentType: "api::tac-gia.tac-gia",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            // // @ts-ignore
            // maxAge: 18000,
            method: "GET",
          },
          {
            contentType: "api::comment.comment",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            method: "GET",
          },
          {
            contentType: "api::danh-muc.danh-muc",
            maxAge: Infinity,
            hitpass: false,
            keys: {
              useQueryParams: true,
              useHeaders: ["accept-encoding"],
            },
            method: "GET",
          }
        ],
      },
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  "strapi-chatgpt": {
    enabled: false,
  },
  // "strapi-gpt": {
  //   enabled: true,
  // },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  wysiwyg: {
    enabled: true,
    resolve: "./src/plugins/wysiwyg",
  },
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        editorConfig: {
          language: "sk",
          height: 500,
          menubar: false,
          extended_valid_elements: "span, img, small, video",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "advlist autolink lists link image charmap preview anchor \
                      searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                      insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | styles | bold italic forecolor backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      media table emoticons visualblocks code|\
                      nonbreaking bullist numlist outdent indent | removeformat | help",
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" },
              ],
            },

            {
              title: "Text",
              items: [
                { title: "Paragraph", block: "p" },
                {
                  title: "Paragraph with small letters",
                  block: "small",
                },
              ],
            },
          ],
        },
      },
    },
  },
  // ...
});