
PROJECT_DETAILS = {
    Website: {
      title: "Website: My personal website",
      summary: `Project Description...`,
      imgsrc: "favicon.ico",
      more: `View the code 
             <a href="https://github.com/FaizovR/faizovr.mati.su" target="_blank">here</a>`,
      technologies:
        "Technologies: Javascript, jQuery, HTML, CSS"
    },
    Libft: {
      title: "Libft",
      summary: `The aim of this project is to code a C library regrouping usual functions that
      I’ll be allowed to use in all your other projects.`,
      imgsrc: "img/Lib.jpeg",
      more: `...`,
      technologies: "Technologies: C, Git"
    },
    Fillit: {
      title: "This is the story of a piece of Tetris, one little square and a dev walk into a bar...",
      summary: 'Fillit is a project that let you discover and/or familiarize yourself with a recurring \
      problematic in programming: searching the optimal solution among a huge set of possibilities, in a respectable timing. In this particular project, you will have to find a way to \
      assemble a given Tetriminos set altogether in the smallest possible square.',
      imgsrc: "img/Fillit.jpeg",
      more: 'View the code \
            <a href="https://github.com/FaizovR/Fillit" target="_blank">here</a>',
      technologies: "Technologies: C, Git,"
    },
    '-':{
      title: "",
      summary: '',
      imgsrc: "",
      more: '',
      technologies: ""
    }
  };

  $(document).ready(readyFn);

  function readyFn() {
    preloadImages();
  
    $(".details").each(function() {
      $(this).hide();
    });
  
    $(".summary").click(function() {
      $(".details").each(function() {
        if ($(this).is(":visible")) {
          $(this).slideToggle();
          $(this)
            .prev()
            .html(
              $(this)
                .prev()
                .html()
                .replace("-", "+")
            );
        }
      });
      if (
        !$(this)
          .next()
          .is(":visible")
      ) {
        $(this)
          .next()
          .slideToggle();
        $(this).html(
          $(this)
            .html()
            .replace("+", "-")
        );
      }
    });
  
    $(".project").click(function(e) {
      showProjectDetails($(this).attr("id"));
    });
  
    showProjectDetails("Website");
  }
  
  function preloadImages() {
    for (const key of Object.keys(PROJECT_DETAILS)) {
      let img = $("<img class='projectimage'/>");
      img.attr("id", key + "_image");
      img.attr("src", PROJECT_DETAILS[key].imgsrc);
      $("#projectimages").append(img);
      img.hide();
    }
  
  }
  
  function showProjectDetails(project) {
    console.log(project);
    $("#projectdetails").slideUp("fast", function() {
      project_obj = PROJECT_DETAILS[project];
      $(".active").each(function(i) {
        $(this).removeClass("active");
      });
      $("#" + project).addClass("active");
      $("#projecttitle").html(project_obj.title);
      $("#projectsummary").html(project_obj.summary);
      $("#projectmore").html(project_obj.more);
      $("#projecttechs").html(project_obj.technologies);
      $(".projectimage").each(function(i) {
        $(this).hide();
      });
      $("#" + project + "_image").show();
      $("#projectdetails").slideDown();
    });
  }