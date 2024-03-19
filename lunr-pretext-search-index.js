var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "     Robert Beezer   Department of Mathematics and Computer Science    University of Puget Sound  Tacoma, Washington, USA   beezer@pugetsound.edu       This is a sample of many of the things you can do with PreTeXt . Sometimes the math makes sense, sometimes it seems to be written in the first person, sort of like this Abstract.    "
},
{
  "id": "section-introduction",
  "level": "1",
  "url": "section-introduction.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   We consider definite integrals of functions . For example, . This is also a demonstration of the capabilities of PreTeXt .   definite integral of   Generated: ,  "
},
{
  "id": "section-fundamental-theorem",
  "level": "1",
  "url": "section-fundamental-theorem.html",
  "type": "Section",
  "number": "2",
  "title": "The Fundamental Theorem",
  "body": " The Fundamental Theorem  There is a remarkable theorem: And fortunately we do not need to try to write it in the margin!    The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.      You will find almost nothing about all this in the article , nor in the book , since they belong in some other article, but we can cite them out-of-order for practice anyway.   When we are writing we do not always know what we want to cite, or just where subsequent material will end up. For example, we might want a citation to or we might want to reference a later .  We can also embed todo s in the source by making an XML comment that begins with the four characters todo , and selectively display them, so you may not see the one here in the output you are looking at now. Or maybe you do see it?   Because a definite integral can be computed using an antiderivative, we have the following definition.    indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .    "
},
{
  "id": "theorem-FTC",
  "level": "2",
  "url": "section-fundamental-theorem.html#theorem-FTC",
  "type": "Theorem",
  "number": "2.1",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.   "
},
{
  "id": "definition-indefinite-integral",
  "level": "2",
  "url": "section-fundamental-theorem.html#definition-indefinite-integral",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": " indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .   "
},
{
  "id": "Abc",
  "level": "1",
  "url": "section-sage-cells.html",
  "type": "Section",
  "number": "3",
  "title": "Computing Integrals with Sage (<span class=\"process-math\">\\(\\int\\)<\/span>)",
  "body": " Computing Integrals with Sage ( )    Computing Integrals with Sage (∫)   Sage integration  Sage integration cell  Sage integration numerical  numerical Sage integration  numerical Sage   numerics  numerics Sage  numerical integration Sage cell Sage   A F  A G  A H  A B  A B C  A B C D  A B C A    X  X F  X G  X H  X Y  X Y Z D  X Y Z A    mixed-content emphasized  structured-content emphasized  sorted as if Cat  sorted as if Quorum  units Z ( sort as A)  units A ( sort as Z)  verbatim text , use sortby   fibers      Cayley graph cayley graph CAYLEY GRAPH     as a variable  Sage can compute definite integrals. The output contains the approximate numerical value of the definite integral, followed by an upper bound of the error in the approximation.   Given the Fundamental Theorem, we would find the antiderivative useful. Cayley graph as a variable   The same command can be used to employ the antiderivative in the application of the Fundamental Theorem. Notice that the answer is exact and any further manipulation is likely to be simply producing a numerical approximation. cayley graph    There are integrals you really do not want to evaluate, or you do not want your reader to evaluate. A Sage cell can be configured for display purposes only you can look but you cannot touch. CAYLEY GRAPH   You can give a Sage element a doctest doctest attributes doctest attribute, whose value mirrors the optional hash tags used in Sage doctests. Possible values are random , long time , not implemented , not tested , known bug , absolute , relative , and optional . The values absolute and relative refer to floating-point tolerances for equality and require a second attribute tolerance to specify a floating point value. The value optional refers to the test requiring that an optional Sage package be present. The name of that package should be provided in the package attribute.   The next cell is marked in the source as doctest=\"random\" , and so is specified as unpredictable and not tested. But there is some sample output which will appear in the latex version (and always be the same). c  A bug test, sorted as c b c one  A bug test, sorted as c x c two  A bug test, sorted as c b c three    While the next cell is random, the returned value will never be more than away from , since the random() function stays between and . So we provide as the expected answer, but test with an absolute tolerance of .   Sage has some functions which affect output, generally making mathematics look more like mathematics via latex syntax. This is a simple test, and you should see the variable and superscript in italics, properly formatted as output when viewed within HTML output. We have provided expected output for doctesting, but it is sort of silly to have this as part of latex output, even if it is instructive.    Sage, and by extension, the Sage Cell Server, can interpret several languages. The next example has code in the R language, R a popular open source language for statistics. As an author, you add the attribute language=\"r\" to your sage element. (The default language is Sage, so you do not need to indicate that repeatedly.) Note that a language like R likes to use a less than character, <, special character in XML. You need to escape it by writing &lt; as we have done in the source for this example. (See the discussion in .)  As a reader you learn that the Evaluate button for a pre-loaded Sage cell will indicate the language in use.   The Sage Cell Server supports the following languages: sage , gap , gp , html , maxima , octave , python , r , and singular .  Here is another R cell. Unfortunately, it seems Sage's doctest facility cannot be used easily with code from other languages. In the source for this example, we have employed the XML escape sequence, &lt; several times (see ).    The Sage Cell server imports a few important R packages. As of 2022-06-04 these are deSolve , ggplot2 , pracma , survey , swirl , and tidyverse . This next example uses the ggplot library for both a data set and the plotting capabilities. Note the initial use of the library() function. This is a modified version of the Bubble plot example at Top 50 ggplot2 Visualizations The Master List .   Here is a blank Sage cell that you may use for practice and experimentation with the commands above. Note that this cell allows a choice of languages, and is not linked with any of the previous cells, so a reader would need to start fresh, or cut\/paste definitions from other cells.   On the other hand a <sage> element with no content will also create an empty Sage cell for the reader's use, but now it will be specific to a particular language and linked to others of the same language. Run the R cell above that defines the variable ruth and then try typing summary(ruth) in the cell below.   You can make Sage blocks which are of type=\"invisible\" , which will never be shown to a reader, but which get doctested. Why do this? If some code produces an error, and you hope it is fixed someday, use an invisible block to raise the error. Once fixed, the doctest will fail, and you can adjust your commentary to suit. There is such a block right now, but you will need to go to the source to see it.    Our maximum width for text, designed for readability, suggests you should format your Sage code with a maximum of about 54 characters. On a mobile device, the number of displayed characters might be as low as 28 in portrait orientation, and again around 50 in landscape. You can use a variety of techniques to shorten long lines, such as using intermediate variables. Since Sage is just a huge Python library, you can use any of Python's facilities for handling long lines. These include a continuation character (which I try to avoid using) or natural places where you can break long lines, such as between entries of a list. Also, if writing loops or functions, you may wish to have your indentation be only two characters wide (rather than, say, four).  Sage output can sometimes be quite long, though this has improved with some changes in Sage's output routines. Output code should be included primarily for doctesting purposes, and in this use, you may break at almost whitespace character and the doctesting framework will adjust accordingly. You may wish to show sample output in a static format, like a PDF, so you can consider formatting your output to fit the width constraints of that medium. Or you may even adjust exactly what is output, to keep it from being too verbose. Sage doctesting also allows for a wild-card style syntax which allows you to skip over huge chunks of meaningless or unpredictable output, such as tracebacks on error messages.  This paragraph is just a placeholder. It has handful of index entries, all starting with the letters gas , taken from Indexing for Editors and Authors: A Practical Guide to Understanding Indexes by Leise, Mertes, and Badgett. The intent is to test letter-by-letter versus word-by-word sorting of index entries. We use a word-by-word order, resulting in:  gas  gas masks  gas production  gas works  gasoline  gastritis   gasoline  gas works  gas  gas masks  gas production  gastritis    Titled Sage Cells  Sage cell with a title   You can place Sage cells inside of a paragraphs if you want to give them a title, but no numbers, .   "
},
{
  "id": "section-interesting-corollary",
  "level": "1",
  "url": "section-interesting-corollary.html",
  "type": "Section",
  "number": "4",
  "title": "An Interesting Corollary",
  "body": " An Interesting Corollary   Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More.  Evermore.    This concludes the (incomplete) objectives for this section, so now we can carry-on as before.     This is a cross-reference to one of the objectives above, forced to use the phrase-global form of the text. It should describe the objective as belonging to the section (rather than the objectives ), since objectives are one-per-subdivision and are numbered based upon the containing division: . For comparison this is the (forced) type-global cross-reference: .  The Fundamental Theorem comes in two flavors, where usually one is a corollary of the other.    Second Version of FTC    Leibniz, Newton  Fundamental Theorem of Calculus Corollary   Suppose is a continuous function. Then .    We simply take the indicated derivative, applying Theorem at .    A justification, which is one of the variants of a proof.    Alternate Proof  You can have multiple proofs, and they can have titles which replace the word Proof as a heading. Here we just exercise displayed math with no automatic numbering, and an elective number on the middle equation.    The alternative version of the Fundamental Theorem ( FTC ) in is a compact way to express the result.  For testing purposes, there is a simple bare Sage Cell here.    A Mysterious Derivative!  So if we define a function with its variable employed as a limit of integration, like so then we get the derivative of that function so easily it seems like a mystery, . That's it.  For testing purposes, there is a simple Sage Cell here, buried inside an example that should be a knowl (embedded in the page).   We test a Sage cell inside a knowl, which should set the value of a variable that will be available to subsequent cells within the knowl.    Even if you ran the cell at the top of this page, within this knowl the value of the variable c is not known, so the next cell will cause an error.    The Sage cells on a page will remember results computed elsewhere on the page. If you rely on this feature, remind your readers to evaluate all the necessary cells and that they perhaps need to be evaluated in a certain order.   There are some Sage cells in the previous (knowled) <example> . The results there are restricted to the knowl. In other words, the scope of those cells is the knowl. So if you opened the example and executed the Sage cells there, or if you skipped the example entirely, the next cell should not know the values of those variables and will raise an error.   We cross-reference the example just prior, , to test the simple Sage cells that will now be part of a cross-reference knowl (an external file).   An Equivalent Claim   This claim is an equivalence: it is true if and only if it is correct.    Our purpose here is to show how you can structure a proof with cases, such as an equivalence structured with the arrows typically used to demonstrate the two directions involved in the proof, by using the direction attribute on a case element.   Nulla non lectus suscipit, bibendum leo quis, dignissim justo. In urna turpis, tincidunt id elementum id, faucibus ac tellus.    Quisque auctor ligula turpis, ut aliquam urna consectetur hendrerit. Aenean porta dolor et justo facilisis feugiat in sed sapien. Nullam porta ex et commodo semper.    Case 3b: The inductive step  A case may also have a title , whose formatting and structure is entirely up to the author. This then becomes the text of a cross-reference, as well.    Necessity  If you like, you can have both indications.    No direction, no title, then just a generic title.     Exciting Proof!  We test here that punctuation at the end of the title of a proof is handled correctly.    Exact Proof  This proof should fill exactly three lines (as of defaults in place 2018-12-31) and so the tombstone\/Halmos should be on a fourth line, and then flush right . xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx.       A Pedagogical Note about   Symbolic and Numerical Integrals  The Fundamental Theorem explains why we use the same notation for a definite integral, which is a numerical calculation, Which I think sometimes students lose sight of. and an antiderivative, which is a symbolic expression.  Essay Question: Compare and Contrast  Write a short paragraph which compares, and contrasts, the definite and indefinite integral. This is an exercise which sits in the midst of the narrative, so is formatted more like an example or a remark. It can have a hint and a solution, but this one does not. It can have a title, which this one does.   Start writing!     Advice  Using an integral sign for an antiderivative (aka indefinite integral) would seem to make the Fundamental Theorem a fait accompli . So I would suggest not conflating the notation for two very different things until the Fundamental Theorem exposes them as being highly related.   An Example of Structure   This is an example of an example with a bit more structure. Specifically, the example has a title , as usual, but then has a statement , which is separate from the solution . Why did we implement an example in two ways?    Authors asked for it and it seemed a very natural thing to do, even if we only had an unstructured version for a long time.     An Example of a Question   Any kind of question can be marked as such with <question> . Or similarly, as a <problem> . They behave identically to example s, such as the one preceding and are numbered along with theorems, examples. etc.    You can have a solution. Or several, even if you don't ask a question.    See?    An Inline Exercise  There are lots of exercises in this sample article, but mostly they are in special exercise sections. Sometimes you just want to sprinkle some exercises through the narrative. We call these inline exercises , in contrast to divisional exercises . The inline exercises look a bit more like a theorem or definition, with titles and fully-qualified numbers.  These may also have hints, answers and solutions.   A good hint.   42.   If your exercise feels like proving a theorem, then you might want to make some comments, but also clearly delineate which part of the solution is a the complete proof.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.     An Example of with math formula in the title   Just for testing math in knowls, and also extra whitespace in a <p> .    There are many different blocks you can employ, and they mostly behave the same way. A <project> project is very similar to a <question> question or <problem> problem   Start Exploring PreTeXt  You could grab the minimal.xml file from the examples\/minimal directory and experiment with that.  Projects get their own independent numbering scheme, since they may be central to your textbook, workbook, or lab manual. If you process this sample article with level for project numbering set to 0 then you will get consecutive numbers from the beginning of your book, starting with 1.    Exploring Explorations   This is an <exploration> . exploration Other similar possibilities are <project> project , <activity> activity , <task> task , and <investigation> investigation .  Note that projects, activities, explorations, tasks and investigations share the independent numbering scheme, so it is really only intended you use one of these. If you want a variant of the name (  Directed Activity ) you can use the <rename> rename an environment facility ( ).    This is a solution to the exploration. In practice, you might choose to not make this visible for students, but instead include it as part of some guidance you might provide to instructors ( an Instructor's Manual ).     Hints, Answers, Solutions   This is quite the activity upcoming. This is a prelude authored within the activity element, but visually just prior.    Another variant of these project-like items is to possibly include a <hint> and an <answer> before the <solution> .    Just a little help.    The result, but no help in getting there.    Everything to get it all done, in detail.    This was quite the activity just now. This is a postlude authored within the activity element, but visually just after.     A Note on Remarks  <remark> , <convention> , <note> , <observation> and <warning> are designed to hold very simple contents, with no additional structure (no proofs, no solutions, ).  But they do carry a title and a number, can be the target of a cross-reference, and may be optionally knowlized in HTML with the html.knowl.remark processing switch.  And distinctly different from a <note> in a <biblio> A gratuitous footnote to test prior bug confusing this with a <note> in a <biblio> . .    An Aside with a Formatted Title  aside  An <aside> is similar to a remark, but is not as critical to the narrative. It is not numbered, and so requires a title. It can be the target of a cross-reference. They are meant to be short, and so are not knowlized at their first appearance. If the content is appropriate, these can be marked as <historical> or <biographical> , though longer items should use subdivisions ( sections, subsections) instead.   An <exercise> can be structured with <task> .  A very structured exercise  This is an over-arching introduction to the whole exercise. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A super-simple task This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. A title of a task that has a subtask with an <answer> for the Solutions  This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A task with a title and an <answer> for the Solutions  A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.   With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.   A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Three simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  First subsubtask. Short paragraph. A second three-deep subsubtask! Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   First answer. In interdum suscipit ullamcorper.   Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This is a conclusion where you could summarize the exercise. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   The following <project> is nearly identical to the preceding <exercise> .   A very structured project   The next block is a project, demonstrating the use of the task element to structure its parts. You are reading the prelude now. The project has lots of nonsense words, so we can test spacing the nested items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is an over-arching introduction to the whole project. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.   With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.   A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Two simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  First subsubtask. Short paragraph. Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   First answer. In interdum suscipit ullamcorper.   Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is a conclusion where you could summarize the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This postlude appears visually outside the project, but is authored within, to make clear its attachment to the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.     Notation mathématique 2   The following <example> , from Elise Desgreniers, is structured with <task> .    Écrivez chacun des exemples suivants avec les conditions pertinentes.    Soit l'ensemble .  On constate que cet ensemble contient uniquement des entiers positifs allant de 1 à 5.  Donc, on peut écrire .      Ce sont des multiples de 3.        Ce sont des nombres impairs.        Ce sont des nombres premiers.        Ce sont des carrés parfaits.        Ce sont des cubes parfaits.      Notes or examples related to computation or technology can go in blocks of the same name.   Sample Use of Sage  This would be a good place to talk about Sage, including a cell or two.   But you might want to describe how to use some other calculator, or maybe some numerical method.    A <paragraphs> with a <project> with an <answer>  The solutions to a project (and similar) once did not migrate to the automatically-generated solutions.    A simple project, no tasks, just an answer.    Here's the answer we are looking for.        This is an exercise in an Exercises subdivision at the level of a subsubsection. There is no question other than if the numbering is appropriate. Here is a self-referential link: Exercise .  The subsubsection has no title in the source, so one is provided automatically, and will adjust according to the language of the document.   This solution will migrate to a list of solutions in the backmatter. We include a sidebyside as a test.   This is a skinny paragraph which should be just 30% of the width.  And another skinny paragraph which should also be just 30% of the width.     An <exercise> can be structured with parts, called <task> . This is the <introduction> .  Do this. And the other thing.     reading questions  A set of reading questions may have an <introduction> , perhaps for preparatory explanation.  If a student has logged in to the HTML version, then they can answer the reading questions directly in the book. Inline math LaTeX can be entered using $ ... $ or \\( ... \\) delimiters, and inline AsciiMath using backticks ` ... ` as delimiters. Here are some `gratuitous backticks` to check that AsciiMath is only active in the answers to reading questions.   This is a reading question that you might have a student answer prior to a class session, based on reading part of the book. A quick glance before class can help you tailor class time to the specific needs of your students. The perfect reading question will reveal whether the student has read and understood the material, and will be difficult to answer if they have not. What do you think of that?  And a second one, with a cross-reference to the first, as a check on numbering: . Reading questions are allowed to have answers, but providing answers misses the point of a reading question, and the answer knowl interacts poorly with the mechanism used to allow students to answer directly in the book. Do you think the schema should ban answers to reading questions?   And for symmetry, a <conclusion> .     glossary   A glossary may have a <headnote> , perhaps with some explanation. This glossary is a specialized division within a section. Placement in the back matter is another option, see the .    bar  A part of foobar . See .    foobar  A synonym for the acronym FUBAR .     Solutions for This Subsection  solutions for a division   This is an introduction, where you might explain that this division of this subsection contains various hints, answers, solutions of inline exercises, divisional exercises, and\/or project-like blocks. See the source to see just how this solutions division was built.     And a conclusion to this solutions division, which may not be readily apparent as distinct from the final division's worth of solutions, but since it is not prefixed with a number, it may be different enough.      Theorem-Like Environments  There are a variety of pre-defined environments in PreTeXt . All take a title, and must have a statement. Some have proofs (theorems, corollaries, ), while some do not have proofs (conjectures, axioms, principles).   The Title Principle   It is a fundamental principle that many elements can have a title. Try it and see. If you get better formatting, then it is being recognized. If it looks very plain, check the documentation and perhaps make a feature request.    More precisely, <theorem> , <corollary> , <lemma> , <algorithm> , <proposition> , <claim> , <fact> , and <identity> , all behave exactly the same, requiring a statement (as a sequence of paragraphs) followed by an optional proof, and may have an optional title. The elements <axiom> , <conjecture> , <principle> , <heuristic> , <hypothesis> , and <assumption> are functionally the same, barring a proof (since they would never have one!). Definitions are an exception, as it is natural to place <notation> within see the source for Definition for an example.    Linking Sage Cells  Sage cells linking  Sage cells share their results on a per-webpage basis, or a per-knowl basis, so if you move to a new chapter, section, or subsection that happens to be on another webpage, your Sage computations are gone and you start fresh. But maybe you need some results from elsewhere. As an author, you can make an exact copy of a cell in another location by placing the code in an external file, which is pure text, freed from any need to format for XML processing. So, in particular, there is no need to escape ampersands and angle brackets, nor is there employment of the CDATA mechanism. But the real value is that there is just one version to edit, and any changes will be reflected in both copies. We demonstrate this in the sample book, since it has the xinclude mechanism in place. In the chapter on groups, find the section on Sage and then find the discussion of subgroups, and you will find an example of two identical Sage cells produced from one source file.  You can also specify certain cells to be auto-evaluated, by setting the auto-evaluate attribute to yes . The resulting cell will not have a button for evaluation (so editing it would be pointless). See the source of this sample article for the two examples below.  2023-08-17: support just now is for the use case of a small portion of code, not a huge library of helper routines.  Two cells with the default language sage .    Two cells with language python .      Hierarchy   Structure  This section of this article has subsections and subsubsections. In a book you can have chapters enclosing multiple sections. There is one finer subdivision, it is achieved with the paragraphs element.  It is basically a sequence of paragraphs, where the first one gets an inline title. You are reading the second, and final, paragraph of one right now. It is useful for organizing very short documents, where numbered subdivisions might be overkill.    A Second Paragraphs  This is a second consecutive paragraphs element, so should seem related to its title, but distinct from the two paragraphs in the grouping with the title Structure immediately prior.    Assemblages: Collections and Summaries  An <assemblage> is a collection, or summary, that does not have much structure to it. So you are limited to paragraphs and friends ( p , blockquote , pre ) and side-by-sides that do not contain captioned items ( sidebyside , sbsgroup ). The intent is that contents are not numbered, so cannot be cross-referenced individually, and so also do not become knowls. You may place <image> , <tabular> , and <program> inside a <sidebyside> , in addition to other objects that do not have captions. Note that p may by extension contain lists ( ol , ul , dl ). Despite limited structure, the presentation should draw attention to it, because the contents should be seen as more important in some way. It should be highlighted in some manner. If you need to connect the entire assemblage with material elsewhere, you can do that with the usual xref\/xml:id mechanism. assemblage  What have we seen so far in this (disorganized) sample?  Theorems, definitions and corollaries. ( )  Sage cells, including with R. ( )  Lots of document structure, like introductions and conclusions (next). ( )   A sample table, as a tabular inside a sidebyside with no caption, follows.   A B C  Uno Dos Tres     This is a small assemblage with no title, simply to make sure the surrounding box behaves properly, especially for latex output.    Assemblages containing  It is acceptable for an assemblage to contain mathematical content, even in its title.     Introductions and Conclusions   An Introductory Introduction  Any subdivision may have a sequence of paragraphs within an <introduction> that precedes subsequent further subdivisions. You are reading one now. They are always leaves of the document structure, so are rendered on some pages that reference the following subdivisions.  An introduction or conclusion is an extremely restrictive container with simple presentation. A title is optional (and probably not advisable). Content is meant to be short and unstructured, in particular, nothing that can be numbered is allowed. If this feels too restrictive, then place your content in an initial numbered subdivision and perhaps title it Introduction . Or make your entire subdivion unstructured and place whatever you want into it.  This ends this introduction to introductions.    Test One  An intervening subsubsection just after an introduction.    Test Two  An intervening subsection section which contains an <exercises> division which must be at the level of a Subsubsubsection.   An inline exercise to examine any clash with divisional exercises below.   An answer so there is something to appear in a <solutions> .    What Did You Learn?   A mock exercise to appease validation.   An answer so there is something to appear in a <solutions> .    And a second to help with formatting the division heading.      A mock exercise to appease validation.   An answer so there is something to appear in a <solutions> .    And a second to help with formatting the division heading.      Test Three  An intervening subsubsection just before a conclusion.    Entirely analogous to introductions are conclusions. Any subdivision may have a sequence of paragraphs within a <conclusion> that follows previous further subdivisions. You are reading one now. They are always leaves of the document structure, so are rendered on some pages that reference the preceding subdivisions.  This concludes this conclusion (and this subsection and this section).     Some Paragraph-Level Markup  Text within a paragraph may be emphasized em emphasis styling words em styling words emphasis with <em> or if you want to take it to the next level you can identify the text as an alert alert styling words alert with <alert> .  Similarly, within a paragraph, you can identify edits between versions as inserted text that has been added styling words insert with <insert> or as deleted text that has been removed styling words delete with <delete> . Note that these identified edits are slightly different than stale text that you want to retain, but which is no longer relevant styling words stale , which is accomplished with <stale> . The original request for stale text came from an instructor with an online list of student topics for presentations, and as students claimed topics they were marked as no longer available for other students.  If you need a fill-in blank , like this , it can be obtained with an empty <fillin> element that defaults to roughly a 10-character width. You can use the <characters> attribute to make the rule longer or shorter, such as a 40-character blank: . The character count is approximate, based on typical character widths within a proportional font carrying English language text. Adjust to suit, or request a language-specific adjustment if it is critical.  This paragraph is intended to make a <fillin> appear right at the start of the second line in print and then the next paragraph has nothing but a <fillin> . Both are for testing purposes.   The following are <fillin> with rows and\/or cols attributes (at least one of which is greater than 1): , , .  Long after we started this mess, we added PreTeXt tags to mark up tags and attributes. The elements are: <tag> , <tage> , <attr> . Examples of how these render are (respectively): <section> , <hash\/> , width . Perhaps this document will make greater use of these tags.  We supply two provisional cross-references for testing purposes only: , .    A conclusion here, which we fill with some numbering tests.  This is a cross-reference to one of the outcomes, forced to use the type-global form of the text. It should describe the outcome as belonging to the section (rather than the outcomes ), since outcomes are one-per-subdivision and are numbered based upon the containing division: . For comparison this is the (forced) type-global cross-reference: .    Fundamental Structures, Revisited   This is a <outcomes> element you are reading, and this is its introduction. This early section has really grown and we have tried to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More, and this is what the cross-references above are pointing to.  Evermore.    This concludes the (incomplete) outcomes for this section, so now we can carry-on to the next section.    "
},
{
  "id": "dEf",
  "level": "2",
  "url": "section-interesting-corollary.html#dEf",
  "type": "Objectives",
  "number": "4",
  "title": "Fundamental Structures",
  "body": " Fundamental Structures   This is an <objectives> element you are reading, and this is its introduction. This early section has really grown and tries to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More.  Evermore.    This concludes the (incomplete) objectives for this section, so now we can carry-on as before.   "
},
{
  "id": "ghI",
  "level": "2",
  "url": "section-interesting-corollary.html#ghI",
  "type": "Corollary",
  "number": "4.1",
  "title": "",
  "body": " Leibniz, Newton  Fundamental Theorem of Calculus Corollary   Suppose is a continuous function. Then .    We simply take the indicated derivative, applying Theorem at .    A justification, which is one of the variants of a proof.    Alternate Proof  You can have multiple proofs, and they can have titles which replace the word Proof as a heading. Here we just exercise displayed math with no automatic numbering, and an elective number on the middle equation.   "
},
{
  "id": "mNo",
  "level": "2",
  "url": "section-interesting-corollary.html#mNo",
  "type": "Example",
  "number": "4.2",
  "title": "A Mysterious Derivative!",
  "body": " A Mysterious Derivative!  So if we define a function with its variable employed as a limit of integration, like so then we get the derivative of that function so easily it seems like a mystery, . That's it.  For testing purposes, there is a simple Sage Cell here, buried inside an example that should be a knowl (embedded in the page).   We test a Sage cell inside a knowl, which should set the value of a variable that will be available to subsequent cells within the knowl.    Even if you ran the cell at the top of this page, within this knowl the value of the variable c is not known, so the next cell will cause an error.   "
},
{
  "id": "claim-with-cases",
  "level": "2",
  "url": "section-interesting-corollary.html#claim-with-cases",
  "type": "Claim",
  "number": "4.3",
  "title": "An Equivalent Claim.",
  "body": " An Equivalent Claim   This claim is an equivalence: it is true if and only if it is correct.    Our purpose here is to show how you can structure a proof with cases, such as an equivalence structured with the arrows typically used to demonstrate the two directions involved in the proof, by using the direction attribute on a case element.   Nulla non lectus suscipit, bibendum leo quis, dignissim justo. In urna turpis, tincidunt id elementum id, faucibus ac tellus.    Quisque auctor ligula turpis, ut aliquam urna consectetur hendrerit. Aenean porta dolor et justo facilisis feugiat in sed sapien. Nullam porta ex et commodo semper.    Case 3b: The inductive step  A case may also have a title , whose formatting and structure is entirely up to the author. This then becomes the text of a cross-reference, as well.    Necessity  If you like, you can have both indications.    No direction, no title, then just a generic title.     Exciting Proof!  We test here that punctuation at the end of the title of a proof is handled correctly.    Exact Proof  This proof should fill exactly three lines (as of defaults in place 2018-12-31) and so the tombstone\/Halmos should be on a fourth line, and then flush right . xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx.   "
},
{
  "id": "Stu",
  "level": "2",
  "url": "section-interesting-corollary.html#Stu",
  "type": "Checkpoint",
  "number": "4.4",
  "title": "Essay Question: Compare and Contrast.",
  "body": "Essay Question: Compare and Contrast  Write a short paragraph which compares, and contrasts, the definite and indefinite integral. This is an exercise which sits in the midst of the narrative, so is formatted more like an example or a remark. It can have a hint and a solution, but this one does not. It can have a title, which this one does.   Start writing!  "
},
{
  "id": "example-structured",
  "level": "2",
  "url": "section-interesting-corollary.html#example-structured",
  "type": "Example",
  "number": "4.5",
  "title": "An Example of Structure.",
  "body": " An Example of Structure   This is an example of an example with a bit more structure. Specifically, the example has a title , as usual, but then has a statement , which is separate from the solution . Why did we implement an example in two ways?    Authors asked for it and it seemed a very natural thing to do, even if we only had an unstructured version for a long time.   "
},
{
  "id": "sample-question",
  "level": "2",
  "url": "section-interesting-corollary.html#sample-question",
  "type": "Question",
  "number": "4.6",
  "title": "An Example of a Question.",
  "body": " An Example of a Question   Any kind of question can be marked as such with <question> . Or similarly, as a <problem> . They behave identically to example s, such as the one preceding and are numbered along with theorems, examples. etc.    You can have a solution. Or several, even if you don't ask a question.    See?   "
},
{
  "id": "inline-exercise",
  "level": "2",
  "url": "section-interesting-corollary.html#inline-exercise",
  "type": "Checkpoint",
  "number": "4.7",
  "title": "An Inline Exercise.",
  "body": "An Inline Exercise  There are lots of exercises in this sample article, but mostly they are in special exercise sections. Sometimes you just want to sprinkle some exercises through the narrative. We call these inline exercises , in contrast to divisional exercises . The inline exercises look a bit more like a theorem or definition, with titles and fully-qualified numbers.  These may also have hints, answers and solutions.   A good hint.   42.   If your exercise feels like proving a theorem, then you might want to make some comments, but also clearly delineate which part of the solution is a the complete proof.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   "
},
{
  "id": "example-math-title",
  "level": "2",
  "url": "section-interesting-corollary.html#example-math-title",
  "type": "Example",
  "number": "4.8",
  "title": "An Example of with <span class=\"process-math\">\\(\\frac12\\)<\/span> math formula <span class=\"process-math\">\\(\\displaystyle{\\int e^x \\, dx}\\)<\/span> in the title.",
  "body": " An Example of with math formula in the title   Just for testing math in knowls, and also extra whitespace in a <p> .   "
},
{
  "id": "section-interesting-corollary-5-3-8",
  "level": "2",
  "url": "section-interesting-corollary.html#section-interesting-corollary-5-3-8",
  "type": "Project",
  "number": "4.1",
  "title": "Start Exploring PreTeXt.",
  "body": " Start Exploring PreTeXt  You could grab the minimal.xml file from the examples\/minimal directory and experiment with that.  Projects get their own independent numbering scheme, since they may be central to your textbook, workbook, or lab manual. If you process this sample article with level for project numbering set to 0 then you will get consecutive numbers from the beginning of your book, starting with 1.  "
},
{
  "id": "section-interesting-corollary-5-3-9",
  "level": "2",
  "url": "section-interesting-corollary.html#section-interesting-corollary-5-3-9",
  "type": "Exploration",
  "number": "4.2",
  "title": "Exploring Explorations.",
  "body": " Exploring Explorations   This is an <exploration> . exploration Other similar possibilities are <project> project , <activity> activity , <task> task , and <investigation> investigation .  Note that projects, activities, explorations, tasks and investigations share the independent numbering scheme, so it is really only intended you use one of these. If you want a variant of the name (  Directed Activity ) you can use the <rename> rename an environment facility ( ).    This is a solution to the exploration. In practice, you might choose to not make this visible for students, but instead include it as part of some guidance you might provide to instructors ( an Instructor's Manual ).   "
},
{
  "id": "activity-with-hint-answer-solution",
  "level": "2",
  "url": "section-interesting-corollary.html#activity-with-hint-answer-solution",
  "type": "Activity",
  "number": "4.3",
  "title": "Hints, Answers, Solutions.",
  "body": " Hints, Answers, Solutions   This is quite the activity upcoming. This is a prelude authored within the activity element, but visually just prior.    Another variant of these project-like items is to possibly include a <hint> and an <answer> before the <solution> .    Just a little help.    The result, but no help in getting there.    Everything to get it all done, in detail.    This was quite the activity just now. This is a postlude authored within the activity element, but visually just after.   "
},
{
  "id": "note-remark",
  "level": "2",
  "url": "section-interesting-corollary.html#note-remark",
  "type": "Note",
  "number": "4.9",
  "title": "A Note on Remarks.",
  "body": " A Note on Remarks  <remark> , <convention> , <note> , <observation> and <warning> are designed to hold very simple contents, with no additional structure (no proofs, no solutions, ).  But they do carry a title and a number, can be the target of a cross-reference, and may be optionally knowlized in HTML with the html.knowl.remark processing switch.  And distinctly different from a <note> in a <biblio> A gratuitous footnote to test prior bug confusing this with a <note> in a <biblio> . .  "
},
{
  "id": "exercise-structured",
  "level": "2",
  "url": "section-interesting-corollary.html#exercise-structured",
  "type": "Checkpoint",
  "number": "4.10",
  "title": "A very structured exercise.",
  "body": "A very structured exercise  This is an over-arching introduction to the whole exercise. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A super-simple task This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. A title of a task that has a subtask with an <answer> for the Solutions  This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A task with a title and an <answer> for the Solutions  A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.   With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.   A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Three simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  First subsubtask. Short paragraph. A second three-deep subsubtask! Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   First answer. In interdum suscipit ullamcorper.   Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This is a conclusion where you could summarize the exercise. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  "
},
{
  "id": "aBc",
  "level": "2",
  "url": "section-interesting-corollary.html#aBc",
  "type": "Project",
  "number": "4.4",
  "title": "A very structured project.",
  "body": " A very structured project   The next block is a project, demonstrating the use of the task element to structure its parts. You are reading the prelude now. The project has lots of nonsense words, so we can test spacing the nested items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is an over-arching introduction to the whole project. We follow with some tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This first task is very simple, just a paragraph. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  Now three paragraphs. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   This second task is further divided by more tasks. This is its introduction. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   A really simple subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A short paragraph, before an answer.   With a proof.   In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   And a bit more to say.   A subtask with an answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Right! In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   Two simple sub-sub-tasks. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  First subsubtask. Short paragraph. Second subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  Third subsubtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   The conclusion of the structured subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  A simple task as the last subtask. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  This concludes our structured second task. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This third top-level task is intermediate in complexity, you are reading the statement , which is followed by more items. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   One hint. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   First answer. In interdum suscipit ullamcorper.   Second answer. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.  In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   At last, the solution. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This is a conclusion where you could summarize the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.    This postlude appears visually outside the project, but is authored within, to make clear its attachment to the project. In interdum suscipit ullamcorper. Morbi sit amet malesuada augue, id vestibulum magna. Nulla blandit dui metus, malesuada mollis sapien ullamcorper sit amet. Nulla at neque nisi. Integer vel porta felis.   "
},
{
  "id": "example-structured-with-task",
  "level": "2",
  "url": "section-interesting-corollary.html#example-structured-with-task",
  "type": "Example",
  "number": "4.11",
  "title": "Notation mathématique 2.",
  "body": " Notation mathématique 2   The following <example> , from Elise Desgreniers, is structured with <task> .    Écrivez chacun des exemples suivants avec les conditions pertinentes.    Soit l'ensemble .  On constate que cet ensemble contient uniquement des entiers positifs allant de 1 à 5.  Donc, on peut écrire .      Ce sont des multiples de 3.        Ce sont des nombres impairs.        Ce sont des nombres premiers.        Ce sont des carrés parfaits.        Ce sont des cubes parfaits.     "
},
{
  "id": "section-interesting-corollary-5-3-19",
  "level": "2",
  "url": "section-interesting-corollary.html#section-interesting-corollary-5-3-19",
  "type": "Technology",
  "number": "4.12",
  "title": "Sample Use of Sage.",
  "body": " Sample Use of Sage  This would be a good place to talk about Sage, including a cell or two.   But you might want to describe how to use some other calculator, or maybe some numerical method.  "
},
{
  "id": "section-interesting-corollary-5-3-20-3",
  "level": "2",
  "url": "section-interesting-corollary.html#section-interesting-corollary-5-3-20-3",
  "type": "Project",
  "number": "4.5",
  "title": "",
  "body": "  A simple project, no tasks, just an answer.    Here's the answer we are looking for.   "
},
{
  "id": "exercise-test-number",
  "level": "2",
  "url": "section-interesting-corollary.html#exercise-test-number",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "",
  "body": " This is an exercise in an Exercises subdivision at the level of a subsubsection. There is no question other than if the numbering is appropriate. Here is a self-referential link: Exercise .  The subsubsection has no title in the source, so one is provided automatically, and will adjust according to the language of the document.   This solution will migrate to a list of solutions in the backmatter. We include a sidebyside as a test.   This is a skinny paragraph which should be just 30% of the width.  And another skinny paragraph which should also be just 30% of the width.   "
},
{
  "id": "exercise-with-tasks",
  "level": "2",
  "url": "section-interesting-corollary.html#exercise-with-tasks",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "",
  "body": " An <exercise> can be structured with parts, called <task> . This is the <introduction> .  Do this. And the other thing. "
},
{
  "id": "first-reading",
  "level": "2",
  "url": "section-interesting-corollary.html#first-reading",
  "type": "Reading Question",
  "number": "4.2.4.1",
  "title": "",
  "body": "This is a reading question that you might have a student answer prior to a class session, based on reading part of the book. A quick glance before class can help you tailor class time to the specific needs of your students. The perfect reading question will reveal whether the student has read and understood the material, and will be difficult to answer if they have not. What do you think of that? "
},
{
  "id": "section-interesting-corollary-5-5-3",
  "level": "2",
  "url": "section-interesting-corollary.html#section-interesting-corollary-5-5-3",
  "type": "Reading Question",
  "number": "4.2.4.2",
  "title": "",
  "body": "And a second one, with a cross-reference to the first, as a check on numbering: . Reading questions are allowed to have answers, but providing answers misses the point of a reading question, and the answer knowl interacts poorly with the mechanism used to allow students to answer directly in the book. Do you think the schema should ban answers to reading questions? "
},
{
  "id": "glossary-specialized-3-2",
  "level": "2",
  "url": "section-interesting-corollary.html#glossary-specialized-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foobar "
},
{
  "id": "principle-principle",
  "level": "2",
  "url": "section-interesting-corollary.html#principle-principle",
  "type": "Principle",
  "number": "4.13",
  "title": "The Title Principle.",
  "body": " The Title Principle   It is a fundamental principle that many elements can have a title. Try it and see. If you get better formatting, then it is being recognized. If it looks very plain, check the documentation and perhaps make a feature request.   "
},
{
  "id": "subsection-intro-conclude-4-3",
  "level": "2",
  "url": "section-interesting-corollary.html#subsection-intro-conclude-4-3",
  "type": "Checkpoint",
  "number": "4.14",
  "title": "",
  "body": " An inline exercise to examine any clash with divisional exercises below.   An answer so there is something to appear in a <solutions> .  "
},
{
  "id": "subsection-intro-conclude-4-4-2",
  "level": "2",
  "url": "section-interesting-corollary.html#subsection-intro-conclude-4-4-2",
  "type": "Reading Question",
  "number": "4.6.2.1",
  "title": "",
  "body": " A mock exercise to appease validation.   An answer so there is something to appear in a <solutions> .  "
},
{
  "id": "subsection-intro-conclude-4-4-3",
  "level": "2",
  "url": "section-interesting-corollary.html#subsection-intro-conclude-4-4-3",
  "type": "Reading Question",
  "number": "4.6.2.2",
  "title": "",
  "body": " And a second to help with formatting the division heading.  "
},
{
  "id": "subsection-intro-conclude-4-5-1",
  "level": "2",
  "url": "section-interesting-corollary.html#subsection-intro-conclude-4-5-1",
  "type": "Exercise",
  "number": "4.6.2.1",
  "title": "",
  "body": " A mock exercise to appease validation.   An answer so there is something to appear in a <solutions> .  "
},
{
  "id": "subsection-intro-conclude-4-5-2",
  "level": "2",
  "url": "section-interesting-corollary.html#subsection-intro-conclude-4-5-2",
  "type": "Exercise",
  "number": "4.6.2.2",
  "title": "",
  "body": " And a second to help with formatting the division heading.  "
},
{
  "id": "outcomes-structures",
  "level": "2",
  "url": "section-interesting-corollary.html#outcomes-structures",
  "type": "Outcomes",
  "number": "4",
  "title": "Fundamental Structures, Revisited",
  "body": " Fundamental Structures, Revisited   This is a <outcomes> element you are reading, and this is its introduction. This early section has really grown and we have tried to accomplish many things. Not all of them are listed here.    Display various blocks , fundamental units of the flow.  More, and this is what the cross-references above are pointing to.  Evermore.    This concludes the (incomplete) outcomes for this section, so now we can carry-on to the next section.   "
},
{
  "id": "Bcd",
  "level": "1",
  "url": "section-facts-figures.html",
  "type": "Section",
  "number": "5",
  "title": "Some Facts and Figures",
  "body": " Some Facts and Figures  footnotes   Because of the Fundamental Theorem First test footnote , for every derivative we know, there is an antiderivative we might find useful. Because of the Fundamental Theorem of Calculus Second test footnote , we recycle the symbol as notation for an antiderivative.   Derivatives       Antiderivatives         You can Third test footnote gain a greater understanding of derivatives by studying the graphs of functions with their derivatives. Can Fourth test footnote you discern the derivative antiderivative Fifth test footnote relationship in Figure ?     A function and its derivative   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes    Lists Sixth test footnote can have multiple columns. With HTML items displayed in row-major order (horizontally first) and Seventh test footnote with latex items are displayed in column-major order (vertically first). When one order, or the other, becomes workable in both variants, maybe we will be consistent in presentation. (Note that with just one row, it makes no difference.) We used it above for the two items derivatives and integrals where each item was a list of its own. Here are two more examples, one with short snippets and lots of columns, the other with lots of text in paragraphs. list multicolumn  Red  Blue  Green  Purple  Yellow  Black  Orange  Pink  Salmon strange colors  Aqua  Cyan  Puce strange colors    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    Donec vestibulum auctor nisl. Nullam placerat interdum dui. Quisque lobortis scelerisque augue imperdiet placerat. Maecenas ultricies massa tempor, laoreet urna a, eleifend enim. Integer sed suscipit odio. Pellentesque non dapibus diam, eget tempus dui. Maecenas sollicitudin magna viverra, egestas velit nec, tristique sem. Cras iaculis mattis dui ac cursus. Integer volutpat, urna vel tempus convallis, erat nisi consectetur turpis, id varius dolor lorem vitae mauris. Phasellus erat orci, laoreet commodo gravida quis, congue in lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent at bibendum turpis. Pellentesque est nisl, dapibus at sagittis non, ultricies in nunc. Etiam ipsum arcu, porta sed feugiat eget, facilisis nec libero. Mauris tempor convallis felis.  Cras iaculis sapien elit, at convallis ligula convallis nec. Duis ante tortor, euismod a libero vitae, ornare viverra purus. Pellentesque facilisis urna a velit volutpat, in malesuada tortor porttitor. Sed vehicula mauris id lectus dignissim, eget consectetur dui pellentesque. Sed vel quam molestie, euismod ligula ac, venenatis arcu. Fusce sit amet sapien non urna dignissim tempus in vitae metus. Aliquam arcu turpis, mattis non libero eu, lacinia feugiat turpis. Phasellus rhoncus lacinia lacus facilisis ullamcorper. Praesent hendrerit accumsan neque, eu dignissim est consequat sed. Nulla facilisi. Proin at mi scelerisque, scelerisque felis ut, tristique diam. Proin in leo in lorem porttitor varius. Praesent condimentum in dui sit amet blandit. In imperdiet blandit congue.    Ut nec sem vitae ipsum interdum vestibulum sit amet sed velit. Aliquam tempor nibh vitae augue pulvinar, at ultricies urna commodo. Donec in porta lectus, ac sagittis felis. Vestibulum tincidunt quis metus facilisis luctus. In lobortis lacus vel ornare vehicula. Duis aliquet, ligula semper sodales adipiscing, augue nibh ornare ante, quis pulvinar justo mi eget mi. Mauris varius imperdiet vehicula. Duis dignissim magna quis velit mattis, in cursus lectus vehicula. Morbi quis tempus felis, ut gravida nisi.  Vivamus eu commodo est, pretium fringilla dolor. Curabitur vel sollicitudin libero. Integer sit amet auctor felis. Maecenas sagittis erat at ante feugiat, in tincidunt ligula pretium. Integer eget auctor ipsum, quis volutpat felis. Morbi id dignissim eros. Suspendisse aliquet pulvinar lorem gravida egestas. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec massa dui. Suspendisse convallis lacus sit amet adipiscing varius. Suspendisse tempus diam vitae justo ornare, in condimentum metus pharetra. Curabitur sem dolor, auctor vitae sagittis vestibulum, posuere imperdiet metus. Etiam pretium lacus urna, vel auctor diam tincidunt non. Etiam viverra sodales iaculis.    Sed varius leo urna. Phasellus tempus mollis ultricies. Curabitur non neque aliquet, facilisis tortor in, sodales dui. Donec hendrerit ultricies nulla mollis rhoncus. In vel lobortis est. Vestibulum consectetur lacus vel sem dignissim vestibulum. Etiam sed elementum ligula, vel congue turpis. Morbi nec diam mattis, venenatis eros et, elementum tellus. Integer sed orci ornare, elementum elit id, lacinia augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In et libero id turpis pharetra faucibus. Integer consequat dignissim semper. Donec pretium magna at ullamcorper ultricies. Nam quis suscipit elit. Donec cursus tellus et venenatis feugiat. Mauris dictum molestie leo, vitae aliquet metus luctus vitae.  Ut id iaculis leo. Sed nec vestibulum mi. Mauris est mauris, porta in nulla eget, bibendum luctus nisl. Praesent et posuere felis, molestie vehicula velit. Nulla a nunc venenatis, aliquam orci nec, congue felis. Vestibulum a dolor nisi. Morbi sed nisi nulla. Nam iaculis felis a enim blandit, at venenatis diam congue. Nulla augue diam, egestas eget fermentum nec, posuere eget risus. Praesent egestas nulla eros, eget accumsan augue euismod vel. Pellentesque pellentesque non erat vitae posuere. Curabitur lacus arcu, varius sed risus ut, ullamcorper tincidunt lorem. Sed et lacus dignissim, tincidunt nisl ac, porttitor sapien.     "
},
{
  "id": "section-facts-figures-4",
  "level": "2",
  "url": "section-facts-figures.html#section-facts-figures-4",
  "type": "Remark",
  "number": "5.1",
  "title": "",
  "body": " You can Third test footnote gain a greater understanding of derivatives by studying the graphs of functions with their derivatives. Can Fourth test footnote you discern the derivative antiderivative Fifth test footnote relationship in Figure ?  "
},
{
  "id": "figure-function-derivative",
  "level": "2",
  "url": "section-facts-figures.html#figure-function-derivative",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " A function and its derivative   a third degree polynomial with a local max and a local min; its derivative is plotted on the same axes   "
},
{
  "id": "derivatives-9",
  "level": "1",
  "url": "derivatives-9.html",
  "type": "Section",
  "number": "6",
  "title": "Some Advanced Ideas",
  "body": " Some Advanced Ideas   The multi-row displayed mathematics in the proof of the Fundamental Theorem had equations aligned on the equals signs via the & character. Sometimes you don't want that. Here is an example with some differential equations, with each equation centered and unnumbered, .   this symbol could be used for lots of things, but we are just trying to make a super-long description to get it to wrap within the column where it belongs, which is sometimes set to a fixed width to accomodate really complicated explanations   rho, a test Just prior to this sentence, in the middle of this paragraph, is an <idx> and a <notation> , adjacent, but separated by some whitespace in the authored source. That insignificant whitespace will be removed akways, which will be a (slightly) noticeable improvement in the latex output. We test referencing notation here, placed before the sentence-ending period and right after some inline mathematics for (ring of) integers modulo .  latex has a device where you can interrupt a sequence of equations with a small amout of text and preserve the equation alignment on either side. Here are two tests of that device, with aligned equations and non-aligned equations. Study the source to see use and differences. (The math does not make sense.)  Aligned and numbered first.  Now with no numbers and no alignment. We include two cross-references in the intertext portion for testing. .  Tables can get quite complex. Simple ones are simpler, such as this example of numerical computations for Euler's method in just a bit.  But first we make a figure with two very simple tables next to each other. This causes the very first instance of <table> to actually be a subtable , which exposes a bug provoked by Emiliano Vega and fixed around 2020-08-06. (So we have to place this early to create the same behavior that exposed the bug.)   Buggy sub-tables    First   One     Second   Two       Euler's approximation for Duffing's Equation with          0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900    "
},
{
  "id": "derivatives-9-8",
  "level": "2",
  "url": "derivatives-9.html#derivatives-9-8",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " Buggy sub-tables    First   One     Second   Two     "
},
{
  "id": "table-euler1",
  "level": "2",
  "url": "derivatives-9.html#table-euler1",
  "type": "Table",
  "number": "6.2",
  "title": "Euler’s approximation for Duffing’s Equation with <span class=\"process-math\">\\(h = 0.2\\)<\/span>",
  "body": " Euler's approximation for Duffing's Equation with          0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900   "
},
{
  "id": "section-mathematics",
  "level": "1",
  "url": "section-mathematics.html",
  "type": "Section",
  "number": "7",
  "title": "Mathematics",
  "body": " Mathematics   To be able to create both latex and HTML output (plus variations), we rely on MathJax, which in turn supports an extensive subset of the mathematical symbols normally available. The AMSMath symbol set is a good approximation. The PreTeXt Guide has a link to the complete list of macros supported by MathJax. We load the AMSsymbols library.    Basic Mathematics  The following is from the MathJax demonstration page , an identity due to Ramanujan:  And again, from the MathJax demonstration page, Maxwell's equations: Maxwell's equations gradient operator  Historically, we provided internal support for the latex package extpfeil . As of 2023-10-19 this has become an author election (see the <docinfo> section in the source of this document). We preeserve a small test that this extensible arrows library is being included properly:  Look back at the top of the source file of this document to see how to include your tex macros just once. For best results keep your macros simple and semantic.  PreTeXt once provided modest built-in support for slanted , or beveled , or nice fractions. To wit, we mean fractions such as: . Use the pre-defined \\sfrac{}{} macro in your mathematics to achieve this presentation. The presentation in HTML is subpar, but could improve as MathJax provides support. It is now an author's responsibility to add support for superior typesetting for PDF output by loading the xfrac  latex package with the following in <docinfo> :  <math-package latex-name=\"xfrac\" mathjax-name=\"\"\/>  which is what we have done here as a test. See the Guide for more details.  We consider a system of equations. We number the first and last equation (there are just two) and include an xml:id on each. We reference the whole system later as the range of equations from the first to the last.    Displayed Mathematics  Multi-line displays of mathematics are achieved with the md tag ( math display ), and the variant that produces numbers on each line, mdn ( math display numbered ), used within a paragraph ( p ). As a good example of how XML syntax is superior, you author lines of equations by enclosing each line inside of a mrow tag, rather than using separators (such as \\\\ ).  If you use no ampersands to express alignment (read ahead), then each equation is centered independently on the width of the text. This is implemented according to the AMSmath latex package's gather environment. Example:  An ampersand is used, in two ways, to describe positioning several equations per line, organized in columns. We have created the pre-defined latex macro \\amp as one way specify these, but the escape sequence &amp; may be used also. The second, fourth, sixth, ampersands separate columns, and the spacing between columns will be provided automatically. The first, third, fifth, ampersands are alignment points for the equations in each column. Typically this is placed just prior to a binary operator, such as an equal sign ( \\amp = ), or for a column of explanations or commentary, just prior to the \\text{} macro. Note that this scenario suggests always having an odd number of ampersands in each mrow . In the example below, alignment is on the equals sign in the first two columns, and provides left-justification to the explanations in the third column. N.B.: the use below of the \\text{} macro does not include mathematics within its argument. Doing so may yield unpredictable results depending on your choice of delimiters for the mathematics (and using an m tag will be ineffective).  PreTeXt will automatically detect the presence or absence of ampersands, but by defining macros for entire aligned equations, you can effectively hide the ampersands. So the @alignment attribute can override automatic detection. We use a simple latex macro to demonstrate setting alignment='align' to override the use of a gather environment and use a align environment instead. Example:  The AMSmath latex package's alignat environment is a third variant of alignment. It never happens automatically, you need to ask for it with alignment=\"alignat\" . It is very similar to align but adds no space between the equation columns. So you can leave it that way, or you can add your own extra space to suit. Here is a previous example with no inter-column space: . This modified example has a middle row with three columns, while the other rows have just one column, as a test of our routines for determining the mrow with the greatest number of ampersands (and how many there are), . Final example demonstrates that ampersands in other objects (matrices here) can wreak havoc with computing the number of columns. So we provide yet another attribute to override automatic detection, alignat-columns . This is the number of columns not the number of ampersands . Generally, for columns, there will be ampersands. . One caveat: if your number of ampersands is even (see advice above about using an odd number) behavior should still be correct, as in next example.  If you want super-precise control over alignment of the terms of a system of equations (linear or not) you can use the alignat option to advantage by not including any extra space. This example is modified slightly from a post by Alex Jordan: Beautiful.  A long equation, to check layout on various screen sizes. This is Weil's explicit formula for the Riemann -function: .   Excessive Display Mathematics  In print versions, a long run of displayed equations often needs to be broken across pages. If you are reading some other version of this, then there is nothing to see here. But for latex output it could be interesting. First, with no extra effort, this page-long display should break naturally, no matter how the preceding material changes. .  In this version we have turned off page breaking for the entire display, but then allowed a break at every fourth equation, so you should see a reasonably attractive page break right after one of the equations. .  So. Do not take any extra steps and let latex figure out the breaks. If you do not like a break, modify the md or mdn to go back to the AMSmath default behavior and not break at all. Ever. Or rather, go further and modify an individual mrow to suggest that it is a good place for a break.   This is a poorly-authored paragaph to test the conversion to HTML . There are two displayed equations, separated by a period ending the first one's sentence, which should migrate into the display, and not leave behind an empty paragraph: . . This final sentence should remain, inside another HTML paragraph, without the second equation's period.    latex Packages and MathJax Extensions  If you would like to enhance your mathematics by using a macro from a latex package and there is a MathJax extension which implements the same macro , then you may use this with your mathematics as we demonstrate here.  This example is from Jason Underdown. Underdown, Jason The package is named cancel and is included in the TeXLive distribution, so is fairly standard. The particular macro being demonstrated is \\cancelto{}{} . . Look at the source of this article to see the package name being supplied in a <math-package> element within the <docinfo> section. That is the only setup required to make the macro usable in latex and HTML output. canceling a term cancelto macro  See the PreTeXt Guide subsection about MathJax Extensions for more detail.    Advanced Mathematics  MathJax is extremely capable in rendering a subset of latex in web browsers, and improving all the time. You can get fairly fancy with some of its supported commands. In particular, if you need to mix in a few words with your mathematics, the \\text{} macro is supported. For example, you might use an if or an otherwise in the definition of a piecewise function.  Consider that the first line below is text sandwiched in-between two Greek letters, wrapped in a \\text{} macro. In HTML output we have taken care that the font for text material within display mathematics should match the font of the surrounding paragraph, as also happens with latex output. The second line is nearly identical in the source, but is just naked text being rendered like a slew of variables. . We are not suggesting here that using words in place of symbols, as in the first line, is a good practice. (It is not.)  The following example is a good stress-test of using the \\text{} macro to achieve certain effects. Note the Unicode left and right smart quotes. This a contribution from Alex Jordan as part of his work on APEX Calculus . And another one from Alex. Note the use of the \\mathord{} and \\mathrel{} macros to control spacing around the mathematical symbols. Examine the source to see how the quotation marks have been authored with XML syntax for Unicode characters, since we do not allow most markup inside mathematics.  Generally, you cannot use any XML elements inside of the mathematics elements. An exception is the xref element which you might want to use to provide justifications for the steps of a derivation. Here is a visual example that is mathematically meaningless, .  Scott Beaver likes to write short chains of equalities all in one line, with the cross-references sitting on each equals sign. Here we test the latex  \\overset and \\underset macros wrapping a PreTeXt  <xref> , with and without content, inside an <me> element. Note that \\stackrel is obsolete, and \\overunderset is not yet supported by MathJax (but see GitHub #2704 ). The mathematics is Scott's, the reasons are totally unrelated to the math. We suggest using cross-references that only display numbers ( <xref> with text set to global ) since if you stick to elements like <theorem> , <lemma> , <definition> , or <axiom> , then the numbers will be unambiguous and the target of the cross-reference will contain full information. But note that if you mix in divisions, or perhaps figures, as reasons then there is a possibility that numbers will need to be qualified by their type. We have provided an abbreviation for one cross-reference to (which will not benefit from automatic translation to other languages).    Local Tags on Equations  If you are not writing a research monograph, maybe (a) you will not use many numbered equations, or do not like the looks of them, or feel they scare your readers, and (b) maybe your cross-references are always local-ish, like strictly within an example or a proof . For this situation you can create, and employ, a local tag on a displayed equation. Nothing enforces the idea of what constitutes local, and there is nothing to stop you from using the same symbols more than once. With freedom comes responsibility.  Use the @tag attribute on an mrow , only. (Remember, you can have just one mrow .) The behavior is identical within an md or mdn . The value of the @tag attribute is a symbol name. The prefix d means double , and the prefix t means triple . So allowed values are  star, dstar, tstar  dagger, ddagger, tdagger  daggerdbl, ddaggerdbl, tdaggerdbl  hash, dhash, thash  maltese, dmaltese, tmaltese  Cross-references to these tagged equations happens in the usual way and should behave as expected. We test the double versions to make sure the symbols render properly in various output formats. Here are the local cross-references: , , , , . We test another farther away in , contrary to our advice above.    Commutative Diagrams  This diagram is authored by Tom Judson using the syntax of the AMS  latex  CD package. Inside of a <me> element start with \\begin{CD} . Remember to escape the less-than character. While this package is not as flexible as some generic drawing packages, it has the advantage of full support by MathJax, and thus the HTML version will be more accessible.    Line-Breaking after Mathematics  As of 2021-05-14, in HTML output the next sentence should just fill a full line across the page. We take active measures to bind the concluding period to the final bit of mathematics, the variable . The prevents a bad line break which could see the period begin a new line, all by itself. In the event that the line-breaking siutation improves, we could relax these measures. This testing is only relevant to HTML output, not latex output.  xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx .    Fonts and Mathematics  This section is about testing types and sizes of fonts, not so much about using different typefaces. First, one long displayed equation, which is designed to be full-width for latex output when using defaults as of 2020-01-29 (commit defd4bffd462e7ea ).  Start paragraph. End paragraph.  The next paragraph has five ways to write the sine of , bracketed by plain text versions. This tests font size and the fonts employed. The raw source of this paragraph is (spread over two lines)  sin x | <m>\\sin x<\/m> | <m>\\text{sin}\\ x<\/m> | <m>\\mathrm{sin}\\ x<\/m> |  <m>\\text{sin}x<\/m> | <m>sin x<\/m> | sin x  The five ways, from good to bad,  The best way, using \\sin . Note the distance to the .  With a \\text{} macro.  With a \\mathrm{} macro. Not recommended for PreTeXt .  Without a space. Note that the previous two require explicit spacing.  No extra effort, so latex renders as a product of four variables.   sin x | | | | | | sin x  Finally a simple paragraph that places a text x next to a variable x .  wordxx xxword    Miscellaneous  In HTML output, a MathJax workaround for a Safari rendering bug was inserting extra spaces after textual subscripts and superscripts ( MathJax thread ). PreTeXt CSS now applies a correction. The following tests if the CSS fix is sufficient, and could be used to test the necessity of our fix in the future. Following is the original report, though NOT has been moved to a superscript: . There should not be anything to see in latex \/ PDF output. (2021-10-21)   "
},
{
  "id": "section-mathematics-4-9",
  "level": "2",
  "url": "section-mathematics.html#section-mathematics-4-9",
  "type": "Example",
  "number": "7.1",
  "title": "Excessive Display Mathematics.",
  "body": " Excessive Display Mathematics  In print versions, a long run of displayed equations often needs to be broken across pages. If you are reading some other version of this, then there is nothing to see here. But for latex output it could be interesting. First, with no extra effort, this page-long display should break naturally, no matter how the preceding material changes. .  In this version we have turned off page breaking for the entire display, but then allowed a break at every fourth equation, so you should see a reasonably attractive page break right after one of the equations. .  So. Do not take any extra steps and let latex figure out the breaks. If you do not like a break, modify the md or mdn to go back to the AMSmath default behavior and not break at all. Ever. Or rather, go further and modify an individual mrow to suggest that it is a good place for a break.  "
},
{
  "id": "section-text-paragraphs",
  "level": "1",
  "url": "section-text-paragraphs.html",
  "type": "Section",
  "number": "8",
  "title": "Entering Text in Paragraphs, Titles, Captions",
  "body": " Entering Text in Paragraphs, Titles, Captions  Text in Paragraphs    Entering Text in Paragraphs   XML , and therefore PreTeXt , is a markup language. But by and large, what you type into your source will be what you see in your output. So there is not much to say. Except that eventually will be essential. However we do test various tricky situations here (which have technical explanations we avoid). See the Author's Guide for a superior treatment of the topics addressed here.    Special XML characters  One of the goals of PreTeXt is to relieve an author of managing the numerous conflicts when mixing languages that use different characters for special purposes. But, of course, XML has its own special characters.  If you type a less-than symbol in your source, the XML processor thinks you are starting an opening, or closing, tag. So how do you get a less-than sign into your source so that it survives into your output, like this: < ? You use an escaped version . Type literally, the four characters &lt; in your source. Then the XML processor will know you want the character and will not mistake it for a tag. But now we want to get an ampersand into our source like: &. How? Another escaped version of a character, literally the five characters &amp; .  Otherwise, keys on your keyboard, even international versions, should be fine in your source and behave as expected. WYTIWYG = What You Type Is What You Get. So the principal concession to using XML markup is the following very simple rule.   Rather than pressing the < and & keys on your keyboard, instead always enter the escape sequences &lt; and &amp; as replacements.   Simple. And it will work in running text, verbatim text (like when authoring the content of <c> or <pre> elements), and mixed into latex syntax to desribe mathematical expressions. XML has three other escape sequences &gt; , &apos; , and &quot; , for the characters >, ', and \" (respectively). But they seem largely unnecessary for authoring in PreTeXt, as we now demonstrate by typing them directly from our keyboard into our source: >, ', and \".  How was &amp; authored? Work it out, and then check the source here for the answer.    Quotations  The <q> quotations tag will provide beginning and ending double quotations, while the <sq> tag will behave similarly but provide single quotes. Given the complexity of quotations, the different symbols used in different languages, and the over-simplified versions provided on keyboards, it is necessary to use markup.  The roots of education are bitter, but the fruit is sweet. (Aristotle)  It is always wise to look ahead, but difficult to look further than you can see. (Winston Churchill)  A large quote can be accomodated with the <blockquote> tag, which can carry within itself an <attribution> element.   The problem with writing a book in verse is, to be successful, it has to sound like you knocked it off on a rainy Friday afternoon. It has to sound easy. When you can do it, it helps tremendously because it's a thing that forces kids to read on. You have this unconsummated feeling if you stop.  Dr. Seuss   We say that again, to test a multiline attribution of a block quotation. Notice how the dash appears automatically, and that it is a quotation dash in HTML, distinct from other sorts of dashes.   The problem with writing a book in verse is, to be successful, it has to sound like you knocked it off on a rainy Friday afternoon. It has to sound easy. When you can do it, it helps tremendously because it's a thing that forces kids to read on. You have this unconsummated feeling if you stop.   Dr. Seuss  Children's Author    Sometimes a quote may extend across several paragraphs. Or a balanced pair of quotations marks crosses an XML boundary, so we need left, right, single and double versions. (For example, see Section on poetry.) Here are all four in a haphazard order: , , , . These should be a last resort, and not a replacement for the q and sq tags. The left\/right versions are used for the following quote from Abraham Lincoln, which we have edited into two paragraphs.  I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have.  I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.  And as a tests, we try some crazy combinations of quotes, which would normally give latex some trouble where the quotation marks are adjacent.  we use single quotes inside of double quotes  double quotes inside of single quotes with more  single quotes tight inside of double quotes  double quotes tight inside of single quotes  An absurd test of two adjacent single quotes inside a pair of double quotes  you would never do this, but a pair of single quotes   N.B. We have taken no special care to protect against interactions of the actual quote characters (described above) in latex with themselves, or with the grouping tags.    Groupings  It is possible to make some other groupings like quotations, such as {some emphasized text grouped within braces}, or [a Book Title inside brackets], an Article Title , some foreign words inside angle brackets , or just a bit of text within double brackets . Some of these are used extensively by scholars who study texts to note various restorations or deletions. Note that the <foreign> element may have a xml:lang attribute.  Note that the angle brackets, and , are not the keyboard characters, < and >. Your best bet is to use the provided <angles> element when constructing a balanced pair. Similarly, <dblbrackets> is provided to make the double-bracket characters easily available, since they are likely not on your keyboard.    Characters, Symbols, and Constructions  Some keyboard characters are ambiguous. Is the character ' an apostrophe or a right single quote? We presume the former, ', and provide markup as an alternative for the latter (described above). Is \/ used to separate words, or to form a fraction? We presume the former, \/, and provide <solidus\/> , , for the latter. We test some other characters straight from our US keyboard (with two being escape sequences).  ~ ` ! @ # $ % ^ & * ( ) _ - + = [ ] { } | \\ ; : ' \" , < . > ? \/  And again as verbatim text.  ~ ` ! @ # $ % ^ & * ( ) _ - + = [ ] { } | \\ ; : ' \" , < . > ? \/  Note that for a long time PreTeXt had empty elements for many of these characters, as a consequence of naïveté. So you might see <dollar\/> , <ampersand\/> , or others in old source. They will be deprecated and will raise warnings.  Now, when a character is nowhere to be found on your keyboard, we provide conveniences as markup. Or a keyboard character may have a different variant which we implement as an empty element. Here we test many of these. Read the Author's Guide for tags and more detail.  copyright   copyleft                There are a few common abbreviations of Latin phrases that can be achieved in HTML one way, and in latex with a slightly different mechanism. These are due to latex 's treatment of a period (full stop), depending on its surroundings. So not reserved characters, but just divergent treatment. Using these will lead to the best quality in all your outputs. See Will Robertson's informative and arcane blog post on the topic if you want the full story for the treatment of a full stop in latex .   Tag Realization Meaning   ad   anno Domini , in the year of the Lord   am   ante meridiem , before midday   bc   English, before Christ   ca   circa , about   eg   exempli gratia , for example   etal   et alia , and others   etc   et caetera , and the rest   ie   id est , in other words   nb   nota bene , note well   pm   post meridiem , after midday   ps   post scriptum , after what has been written  vs   versus , against   viz   videlicet , namely    We also distinguish between abbreviations ( vs. ), acronyms ( SCUBA ) and initialisms ( XML ). This is a test of the text version of a multiplication symbol: 2 4.   Simple coordinates with degrees, minutes, seconds, or temperature, or distance in feet and inches. We parked the car at 36 16 0.83 N, 122 35 47.27 W, and since it was 93 F, we walked 505 3.6 so we could swim in the bay.  An em dash is the long dash used much like parentheses (not an en dash used to denote a range, such as a range of page numbers). It should not have spaces around it, but some style guides allow for a thin space, which we test right now. A publication file entry can be set to none or thin to control this.    Currency  For best results, be certain the right Unicode characters are in your source. If you only need a certain symbol rarely, you can enter it in your source via its Unicode number. For example, to obtain a peso, type &#x20B1; . This table has been tested with our default fonts, and should be fine for HTML output. Please report any difficulties with different latex fonts, as there are extra measures we can take to make these more robust. (We've already done this for the Paraguayan guaraní.)   Supported Currency    Sign  Unicode  Name    $  U+0024  dollar    ¢  U+00A2  cent    £  U+00A3  sterling    ¤  U+00A4  currency    ¥  U+00A5  yen    ƒ  U+0192  florin    ฿  U+0E3F  baht    ₡  U+20A1  colon    ₤  U+20A4  lira    ₦  U+20A6  naira    ₩  U+20A9  won    ₫  U+20AB  dong    €  U+20AC  euro    ₱  U+20B1  peso    ₲  U+20B2  guarani       Icons in Text  A limited supply of icons can be used when explaining how to use some computer application. The empty element is <icon\/> and the attribute is name .  We sprinkle a few into a few sentences to check baselines and font sizing. We sprinkle a few into a few sentences to check baselines and font sizing. We sprinkle a few into a few sentences to check baselines and font sizing. We sprinkle a few into a few sentences to check baselines and font sizing.   User-Interface Icons          Name Icon  Name Icon  Name Icon    arrow-down  arrow-left  arrow-right    arrow-up  file-save  gear    menu  wrench        Nominations of new icons must  Have a Unicode character representation.  Be in the HTML\/CSS\/JS Font Awesome catalog.  Be in the latex  fontawesome package.  Have a reasonably semantic PreTeXt name.  Please supply all this information, including the official Unicode name, with your request. Better yet, form a pull request.   Icons, xelatex , and Fonts  When processing a latex file with xelatex the FontAwesome icons are expected to be in a system font whose name is FontAwesome . This is not a filename, and installing the latex  fontawesome package into your latex installation does not mean you have made this font available as a system font.  The Publisher's Guide contains some discussion about installing fonts into a system, as part of the documentation of creating a latex style, and has particular warnings about only using the latex  fontawesome package as a vehicle for installing and accessing these fonts.     Keyboard Keys  keyboard keys  Your text can include specialized text meant to look like a key on the keyboard of a calculator or other device. So you can go b  Enter  < or F1 . Or maybe a sequence as: Tab > Ctrl > T . Use the <kbd> element, with the label of the key as content.  There is a growing supply of keys which are labeled with graphics rather than text, such as a left arrow , right arrow , up arrow , down arrow , and Enter . See The PreTeXt Guide for the definitive list. In the literal column means the symbol\/character is the content of a <kbd> element, while the named column means the symbol\/character has been chosen via the value of the name attribute of an empty <kbd\/> element.   Named keys     Literal  Named    Ampersand  &     Less than  <     Greater than  >     Dollar  $     Per cent  %     Open brace  {     Close brace  }     Hash  #     Backslash  \\     Tilde  ~     Circumflex  ^     Underscore  _       Upper Case    ~  !  @  #  $  %  ^  &  *  (  )  _  +     Tab  Q  W  E  R  T  Y  U  I  O  P  {  }  |    CapsLock  A  S  D  F  G  H  J  K  L  :  '  Enter     Shift  Z  X  C  V  B  N  M  <  >  ?  Shift       Lower Case    `  1  2  3  4  5  6  7  8  9  0  -  =     Tab  q  w  e  r  t  y  u  i  o  p  [  ]  \\    CapsLock  a  s  d  f  g  h  j  k  l  ;  '  Enter     Shift  z  x  c  v  b  n  m  ,  .  \/  Shift        URLs, such as  link external, url  reference external, url  The <url> element can be used to create an external reference. The mandatory href attribute is the actual URL complete with the protocol (e.g. https:\/\/ ). Content for the element is optional, and if provided will be the clickable text. In this case, a visual attribute can be provided, and this will become a footnote with a more friendly version of the URL . When no content is provided, the clickable will be the URL with a preference for an optional visual . This subsection has some (extreme) tests and we leave complete documentation and full details for the PreTeXt Guide.  A long URL for testing: . Notice in the source that you do not put any tags inside the href or visual attributes, but you may need to provide XML escape sequences (see ).  A <url> element with content will get a footnote, by containing the (simplified) URL in the highly-recommended visual attribute. If you do not provide the visual attribute in this case, then you will get the href value repeated, possibly with some editing. If you insist, you can make the visual attribute identical to the href attribute. Some tests:  With a useful visual attribute  With a duplicate visual attribute  With no visual attribute , so an edited one is formulated (no protocol)   Here is a totally bogus URL , which contains every possible legal character, so if this fails to convert there is some problematic character. In order to test the use of a percent sign ( % ) in a URL, we follow it by two hex digits, specifically, 58 , which is a way to represent the character X in a URL . Normal text, monospace text, <url> with just href , <url> with href and visual , <url> with href , visual and content. Notice how the various versions do, or do not, line-break in latex \/PDF output, including the (potentially confusing) use of a use of a hyphen in the normal text version   ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%-._~:\/?#[]@!$&'()*+,;=  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%-._~:\/?#[]@!$&'()*+,;=    Characters to a footnote   Line-breaking in latex \/PDF output is specialized, using path separators (slashes) as candidates for splitting across lines:  We are not fans of footnotes, they are totally unstructured. Carleson's Theorem A URL in a footnote migrates around, and so care must be taken. This paragraph has two footnotes, one with a real URL from Jesse Oldroyd, another with a fake URL from the above suite. For good measure, we repeat the URL found in the first footnote (which lacks its own footnote by design And if you do provide a link like Carleson's Theorem in a footnote, provide an easy-to-read reference, such as en.wikipedia.org\/wiki\/Carleson%27s_theorem since the extra footnote and any visual will be squelched. ): Carleson's Theorem . And we include a no-content version of the same link, with a visual version provided and employed: .    Biological Names  biological names  biological names taxon  scientific names biological names  The taxon taxon biological names taxon element can be used all by itself to get an italicized scientific name, as in Escherichia coli . It can also be structured with the elements genus genus biological names genus and species , species biological names species as in using both together in Cyclops kolensis . Or the subelements can be used individually. Rules for capitalization are presently your responsibility as an author. Possible improvements include new subelements, attributes for database identifiers, and checks on capitalization. Also, we might automatically abbreviate the genus after first use.  There is an attribute, @ncbi ncbi attribute attributes ncbi attribute biological names ncbi attribute that you can use on the taxon element to precisely identify the organism you are discussing using an identification number from the National Center for Biotechnology Information . Their taxonomy is at www.ncbi.nlm.nih.gov\/taxonomy . Right now, we do not do anything with this attribute, but things like links are certainly possible. See the source of this document to see it in use with Drosophila miranda which could be used to construct a link to further information via id number or even further information via just the name .    Verbatim in titles, \\a&b#c%d~e{f}g$h_i^j , OK  You can test the migration of the latex special characters in this section title by requesting a 2-deep Table of Contents via the publication file.    Special Situations  Sage defines a nice syntax for generators of algebraic structures, but we must remember to use an escape sequence for the < symbol (see ).   There is an alternate Sage syntax, which avoids the less-than and greater symbols.   Ampersands, less-than, and greater symbols are likely to be necessary in source code, such as Sage code (think generators of field extensions) or TikZ code (think arrowheads), and in matrices (think separating entries). If you have a big matrix, or a huge chunk of TikZ code, you can protect it all at once from the XML processor by wrapping it in <![CDATA[ ]]> . It should be possible to write without ever using the CDATA mechanism, but it might get tedious in places to use the supplied macros or XML escape sequences. This construction is often mis-understood as a solution better remedied by reading again.  We test the three pre-defined latex macros for &, <, and > with a pair of aligned equations:    Jupyter Notebook, Markdown, MathJax, Delimiters  A Jupyter notebook allows a mix of HTML (our logistical preference for a conversion) and Markown (another set of special characters and their escaped versions). Certain pairs of delimiters, when appearing in consecutive HTML  <code> elements require extraordinary care. But the one nut we cannot crack is pairs of dollar signs. So the next paragraph is known to render badly in a Jupyter notebook, but should otherwise be a bit boring.  $ and $    latex Characters, Ligatures, and More  This section is just for testing, and the more you know about latex , the more we would encourage you to not to read this. Look to the Author's Guide for the right way to author your source.  The ten reserved characters, directly in the source: # $ % ^ & _ { } ~ \\. And again: X#X$X%X^X&X_X{X}X~X\\X, but smashed up tight to intermediate characters.  In a verbatim presentation: # $ % ^ & _ { } ~ \\ .  And X#X$X%X^X&X_X{X}X~X\\X . (These verbatim versions are authored in different paragraphs to work around the Jupyter notebook bug described above.)  We also disrupt certain constructions from latex . Attempting to sneak-in any traditional macro for the purposes of latex -only output, such as, say a \\newpage, will fail since the leading backslash will be caught and converted to \\textbackslash . (See? It just happened twice.) For technical reasons we want to particularly test \\textbackslash, \\textbraceleft, and \\textbraceright.  Four tex ligatures , -- , --- , `` , and '' , authored in running text, --, ---, ``, ''. It may be hard to tell that the two consecutive apostrophes have not coalesced into a curly left smart quote, but see below, the spacing is subtly different.  We want the double quote mark from your keyboard, \" , to not morph into some other character: \" .  More testing: runs of hyphens. Such as: - (one), -- (two), --- (three), ---- (four), ----- (five), ------ (six), ------- (seven). Use the empty elements <ndash\/> and <mdash\/> for the longer dashes\/hyphens.  Runs of apostrophes should not become smart right double quotes: ' (one), '' (two), ''' (three), '''' (four), ''''' (five), '''''' (six), ''''''' (seven). You might want to cut-and-paste these into a text file to convince yourself there are the right number of characters. Here are two smart right double quotes, separated by a non-breaking space, for visual comparison: . Or 30 apostrophes on a line of their own (longer) followed by 15 smart right double quotes (shorter).  ''''''''''''''''''''''''''''''.  .  Runs of backticks (accent grave) should not become smart left double quotes when the output is processed by latex : ` (one), `` (two), ``` (three), ```` (four), ````` (five), `````` (six), ``````` (seven). Furthermore, in a context where Markdown syntax is recognized as well ( a Jupyter notebook), paired backticks should not produce `inline verbatim text`.  The next paragraph has a long run of words separated\/joined by the keyboard forward-slash character. With this input, latex will not line-break at the slash, nor will it hypenate anywhere. PreTeXt automatically provides an improved slash, which will line-break, as you should see below in latex output. There is a bad right margin, but that is due to the absurdity of this test. This sort of problem should be no better or worse for the use of this character. Further refinements (zero-width space) and packages can be used to get hyphenation. HTML will line-break rationally with no extra help. Remember the <solidus\/> character for super-simple text fractions like 7 32 (which will not line-break), and math elements or SI unit markup for technical work.  A\/test\/of\/some\/short\/words\/that\/go\/off\/the\/end\/of\/a\/line\/A\/test\/of\/some\/short\/words\/that\/go\/off\/the\/end\/of\/a\/line\/A\/test\/of\/some\/short\/words\/that\/go\/off\/the\/end\/of\/a\/line\/A\/test\/of\/some\/short\/words\/that\/go\/off\/the\/end\/of\/a\/line\/A\/test\/of\/some\/short\/words\/that\/go\/off\/the\/end\/of\/a\/line.    HTML and accidental mathematics  We render mathematics in web pages with the fantastic MathJax Javascript library. Simplifying just a bit, it recognizes latex syntax within a page, takes control of that text, and replaces it wth nice fonts and formatting. Now, if you write about latex you might well have some mathematics in your examples. Best practice would be to use verbatim text for that, and we mark off such text as being off-limits to MathJax.  But if you are writing running text, then you can (accidentally) author some text which MathJax recognizes and converts to something (unintended). And if you are doing this intentionally, then you have ignored PreTeXt markup for mathematics, and are missing out on some features.  A few tests that we can prevent any accidents.  Inline mathematics: \\(x^2\\).  Display mathematics: \\begin{align}x^2+y^2=z^2\\end{align}  Double backticks is a common latex construction, which in latex \/PDF output should not become an opening quote-mark. Also, a single backtick in HTML is a signal for MathJax to interpret ASCIIMath, and then a double backtick causes random pieces of mathematics on a page to not render at all. So we have a quotation authored latex -style: ``We have nothing to fear, but fear itself.''   "
},
{
  "id": "subsection-xml-escape-3",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-xml-escape-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "escaped version "
},
{
  "id": "subsection-xml-escape-7",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-xml-escape-7",
  "type": "Checkpoint",
  "number": "8.1",
  "title": "",
  "body": "How was &amp; authored? Work it out, and then check the source here for the answer. "
},
{
  "id": "section-text-paragraphs-6-7",
  "level": "2",
  "url": "section-text-paragraphs.html#section-text-paragraphs-6-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quotation dash "
},
{
  "id": "section-text-paragraphs-8-13",
  "level": "2",
  "url": "section-text-paragraphs.html#section-text-paragraphs-8-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "em dash en dash "
},
{
  "id": "section-text-paragraphs-9-3",
  "level": "2",
  "url": "section-text-paragraphs.html#section-text-paragraphs-9-3",
  "type": "Table",
  "number": "8.2",
  "title": "Supported Currency",
  "body": " Supported Currency    Sign  Unicode  Name    $  U+0024  dollar    ¢  U+00A2  cent    £  U+00A3  sterling    ¤  U+00A4  currency    ¥  U+00A5  yen    ƒ  U+0192  florin    ฿  U+0E3F  baht    ₡  U+20A1  colon    ₤  U+20A4  lira    ₦  U+20A6  naira    ₩  U+20A9  won    ₫  U+20AB  dong    €  U+20AC  euro    ₱  U+20B1  peso    ₲  U+20B2  guarani    "
},
{
  "id": "subsection-icons-in-text-4",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-icons-in-text-4",
  "type": "Table",
  "number": "8.3",
  "title": "User-Interface Icons",
  "body": " User-Interface Icons          Name Icon  Name Icon  Name Icon    arrow-down  arrow-left  arrow-right    arrow-up  file-save  gear    menu  wrench       "
},
{
  "id": "subsection-icons-in-text-6",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-icons-in-text-6",
  "type": "Warning",
  "number": "8.4",
  "title": "Icons, <code class=\"code-inline tex2jax_ignore\">xelatex<\/code>, and Fonts.",
  "body": " Icons, xelatex , and Fonts  When processing a latex file with xelatex the FontAwesome icons are expected to be in a system font whose name is FontAwesome . This is not a filename, and installing the latex  fontawesome package into your latex installation does not mean you have made this font available as a system font.  The Publisher's Guide contains some discussion about installing fonts into a system, as part of the documentation of creating a latex style, and has particular warnings about only using the latex  fontawesome package as a vehicle for installing and accessing these fonts.  "
},
{
  "id": "named-keyboard-keys",
  "level": "2",
  "url": "section-text-paragraphs.html#named-keyboard-keys",
  "type": "Table",
  "number": "8.5",
  "title": "Named keys",
  "body": " Named keys     Literal  Named    Ampersand  &     Less than  <     Greater than  >     Dollar  $     Per cent  %     Open brace  {     Close brace  }     Hash  #     Backslash  \\     Tilde  ~     Circumflex  ^     Underscore  _     "
},
{
  "id": "subsection-keyboard-6",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-keyboard-6",
  "type": "Table",
  "number": "8.6",
  "title": "Upper Case",
  "body": " Upper Case    ~  !  @  #  $  %  ^  &  *  (  )  _  +     Tab  Q  W  E  R  T  Y  U  I  O  P  {  }  |    CapsLock  A  S  D  F  G  H  J  K  L  :  '  Enter     Shift  Z  X  C  V  B  N  M  <  >  ?  Shift     "
},
{
  "id": "subsection-keyboard-7",
  "level": "2",
  "url": "section-text-paragraphs.html#subsection-keyboard-7",
  "type": "Table",
  "number": "8.7",
  "title": "Lower Case",
  "body": " Lower Case    `  1  2  3  4  5  6  7  8  9  0  -  =     Tab  q  w  e  r  t  y  u  i  o  p  [  ]  \\    CapsLock  a  s  d  f  g  h  j  k  l  ;  '  Enter     Shift  z  x  c  v  b  n  m  ,  .  \/  Shift     "
},
{
  "id": "section-graphics",
  "level": "1",
  "url": "section-graphics.html",
  "type": "Section",
  "number": "9",
  "title": "Graphics",
  "body": " Graphics   In addition to including images created externally (e.g. photographs), PreTeXt supports several languages for describing diagrams and pictures with human-readable source code ( plain text), rather than using a paint program. This section describes the various methods for incorporationg, or generating, graphis, images or diagrams.    Images from External Sources  If you have raster images (photographs, etc.) then they are specified with complete filenames, as above in Figure or just below.   New Zealand Landscape, commons.wikimedia.org , CC-BY-SA-2.0    If you have existing images that are vector graphics, then PDF format works best for latex output and SVG format works best for HTML. The utility pdf2svg works well for converting PDF to SVG. In this case, specify your source as a filename, but leave off the file extension, and the appropriate version will be used for the current output format.  The image below is provided from a PDF file in latex output, and was converted to an SVG for use with the HTML output. It has been explicitly scaled to a width of 65% of the text width.   Complete graph on vertices, from www.texample.net     Footnote Buried  Nested tcolorbox (in latex conversion) need special care when footnotes are interior.   A paragraph interior to a sidebyside with a footnote Interior footnote. buried inside the paragraph.  A second paragraph, just to avoid a one-panel warning.   The final paragraph of this remark, randomly placed, to test footnotes in latex conversions.     latex images  latex image  image latex image  There are several graphics engine packages that a latex document can employ. Code from these packages renders diagrams automatically as part of normal processing of latex files. For HTML output the pretext script produces SVG versions of the pictures. The script can also produce standalone tex source files, PDFs, PNGs, and EPSs. The packages should be loaded in docinfo\/latex-image-preamble , which is also where global package settings should be made. If any ampersands occur in your latex code you should use the \\amp macro pre-defined by PreTeXt . These first examples are from the TeXample.net site. Note that any latex macros used in the rest of your document may be employed in the latex -standalone or Asymptote diagrams (with this feature coming to Sage graphics next?).    TikZ Electronics Diagram   a pile of electronic components wired together     The next example began life in Sketch , which will output TikZ code (though the code has been edited by hand for readability).    TikZ Cone Drawing      The pgfplots package was included in docinfo\/latex-image-preamble . Here, it is used. Also, here we demonstrate using \\amp where you would normally use an ampersand in latex . There are known issues with xelatex processing any gradient shading in tikz . To (successfully) create the gradient shading in the 3D image here, you may need to use pdflatex until latex developers resolve this issue.   Sample pgfplots plot   a Cartesian plane with a function graph, a parametric curve, and some points     A plot might use a graphics language to draw the axes and grid, but the data might be from an experiment and live in an external file that you do not wish to place in your source. Place such a file in a subdirectory directly below the directory where your master source file resides. In the example below data is the directory and hodgkin-huxley-data.dat is the file with the data points. You must place the file in a subdirectory (it cannot reside next to your source file), but that directory may have subdirectories if you have many such files and want to organize them that way. Then the --include command-line argument to the pretext script will manage the external files properly as it creates individual image files.  It is still your responsibility to be sure this directory of external data files follows your latex output to whatever directory you use to convert to a PDF and is in the right location for the relative path given in the XML source. The discussion above only applies to generating individual image files, such as you would need for the HTML output.   External data in a pgfplots plot   a Cartesian plot of electric potential over time;     A Cartesian plot might benefit from having a <description> with a <tabular> that lays bare the data used to to plot points.   Full description with tabular   a plot of some data points   A Cartesian graph plotting the following data.                                    PSTricks is a latex package for drawing diagrams and pictures, dating back to the days before PDF , when PostScript ( PS ) was king. Given its history, it does not seem to work easily with the pdflatex engine. But it will work easily with the xelatex engine. We try to keep this present sample document workable with both engines, so we have presented an example of the use of PSTricks in the xelatex -exclusive sample document where we test obscure fonts and characters. So your best bet is to look there. PSTricks  There are suggestions online that \\usepackage[pdf]{pstricks} along with pdflatex --shell-escape *.tex is workable. We could not make it happen, and a shell escape can be a dangerous security hole. That said, updates to this approach are welcome.    Asymptote, 2D  The Asymptote asymptote graphics language graphics language may be placed in your source to draw graphs, diagrams or pictures. Rules for formatting code are identical to those for Sage code. For more on Asymptote see .   This is a simple physics diagram about levers, taken from the Asymptote documentation. In the HTML version of this article, the images are SVG's and so should scale nicely when you zoom in on the page.     Asymptote Lever Demonstration   moments on a lever     And a colorful contour plot with logarithmic scale. Again, from the Asymptote documentation. This SVG image employs two additional PNG images for the two parts where the color varies continuously.    Asymptote Contour Plot      Here is the lever diagram again, but now we have added an integral to one of the legends, using a latex macro of our own, which is idential to one we used in the early part of this article. The point is, we only needed to define the macro once for the entire document, and it is available as we make Asymptote diagrams. This device can be used to maintain flexibility and consistency in your choice of notation.   Aymptote Lever, plus Integral        Asymptote, 3D via WebGL  Asymptote can create an HTML file that is an interactive version of a 3D shape. At this writing (2020-05-18) support via the pretext script is evolving. Plus, you will need newer versions of Asymptote and the dvisvgm utility to duplicate all of the results being displayed here in this testing document. The other distinction is that the author needs to provide the aspect ratio of the figure, and this should be placed on the <asymptote> element (not on the <image> element). is from the Asymptote Gallery .   Work Cone (Asymptote Interactive 3D Image)      These 3D images in HTML output are rotable with a pointing device (mouse, trackpad) with a click-and-drag. A finger should suffice on touch-sensitive devices (phones, tablets). Zooming in and out can be accomplished with a mouse wheel, or by pinching. As a contribution to the accessibility of PreTeXt HTML output, keyboard controls will also allow for exploration of these images. (Make sure the image has focus when you attempt to use these.)      3D Image Keyboard Controls   Key Action  x Rotate around -axis  y Rotate around -axis  z Rotate around -axis  + Enlarge image  - Shrink image  h Return to home position    And finally, an example of a 3-D graph (from the Asymptote documentation again). This WebGL image is a beautiful example of a Riemann surface. As you rotate the image, notice how the reflection of the light source varies, along with the brightness of various regions of the surface. This example is accomplished with just 10 lines of Asymptote code.     Asymptote 3-D Surface        Sage Plots  Sage plots  Any of the numerous capabilities of Sage may be used to produce any graphics object, be it the simple graph of a single-variable function or some realization of a more complicated object. All of the usual rules about formatting Sage code (esp. indentation) apply, along with one more caveat. The last line of your Sage code must return a Sage Graphics object (or 3D plot). The pretext script will isolate this last line, use it as the RHS of an assignment statement, and the Sage .save() method will be called to generate the image, which is either a Portable Document Format (PDF) file amenable to latex output, or a Scalable Vector Graphics (SVG) file amenable to HTML output. For visualizations of 3D plots, Sage will only produce Portable Network Graphics (PNG) files, which can be included in HTML pages or latex output. For complete documentation, see the PreTeXt Guide as this subsection is not comprehensive.   A Sage standard parabola, on   a standard parabola on the interval [-2,4]     Pay careful attention to the requirement that the last line of your code be a graphics object. In particular, while show() might appear to do the right thing, it evaluates to Python's None object and that is just what you will get. The code for Figure illustrates creating two graphics objects and combining them into an expression on the last line that evaluates to a graphics object.   Two Sage plots on one set of axes      Sage code comprised of just a single line was once mishandled, leading to no ouput . From Jean-Sébastien Turcotte we have the example that revealed the problem.   Les vecteurs et    Les vecteurs et sont tracés tel que demandé, respectivement en rouge et en bleu.      The following examples are from the Sage Tour . We package them into a sidebyside layout element, see .      A Sage multigraph of a sentence          Sage polynomial approximations of        From the Sage documentation, with slight modifications, credited to Douglas Summers-Stay. A plot of the implicity defined surface in rectangular coordinates, with equal to the golden ratio. If you set plot_points=100 in the Sage code, you will get a very smooth rendering, but also a quite large HTML file. We have used plot_points=50 to reduce the file size by a factor of four. Note the need for a value of 3d for the variant attribute, and an explicit aspect ratio with aspect . Arrow keys, a mouse scroll wheel, plus grabbing with a left or a right mouse button, can be used to manipulate the image.   A Sage implicitly defined 3D surface        Inkscape Images  Inkscape is a great tool for creating images. It ticks all the boxes: open source, mature, cross-platform, standards-compliant. Read much more about it in The PreTeXt Guide. In HTML output the two images below are both in SVG format. The first is pure SVG, while the second has embedded information that makes it easier to edit in Inkscape. You could view the source for this page in the HTML version, deduce the filename of the second image, download it, and manipulate it profitably with Inkscape. Both files are quite small, but the first is half the size of the second. In PDF the two images come from files that are identical, so nothing is being tested. The PDF version is smaller still.   Inkscape Stars, Plain SVG (left), Inkscape SVG (right), from Bethany Llewellyn         Copies of Images  Sometimes you want to use the same image more than once. Here we just point to a PNG file that we repeat often throughout this sample.   Copy of raster image, in a figure, so now numbered and captioned    For images described by code, such as TikZ code in a <latex-image> element, this is a bit subtler. See the PreTeXt Guide for a complete description. We also demonstrate this with the sample book, since it is all set up with the xinclude mechanism. See the two plots of the 8-th roots of unity in the complex numbers section of the chapter on cyclic groups.    Caption Testing  A caption could be as substantial as a paragraph, here we test out one such example.   A caption can be a whole paragraph with lots of technical details, and maybe a hyperlink to something external, such as or PreTeXt . There could be some inline mathematics, such as . Would a knowl open here? Recursively? Let's see: . Display mathematics, side-by-sides, theorems, and lots of other things should be banned. Footnotes sound like a bad idea. Strange characters should be fine: .      Captionless Images  We strongly suggest placing images within a <figure> , as we have done above, so that you can reference them, and use the (required) <caption> to explain what they are. However there are places, such as a <preface> , where numbered items are not permitted. So you might want a solo image there. Or maybe graphics are an illustration of sorts, and a numbered figure feels like overkill. Or it is part of an <exercise> or <proof> of a <theorem> . But notice that you cannot then use this image as the target of a cross-reference, so you may need to refer to some enclosing container.  The image can be scaled by specifying the width as a percentage, including the percent-sign (%). The height is scaled to preserve the aspect ratio. There is no facility to change the height, it is your responsibility to manage the aspect ratio independently. The margins can be given as a pair of percentages, separated by a space. The width defaults to 100%, while margins defaults to the value auto , which will center the image. Missing values are computed sensibly, and there is robust error-checking. The layout control here is a subset of what is available for the more elaborate <sidebyside> element, see .  Two simple examples. The first has width 10% and so defaults to being centered, and the second has width 10% and left margin of 25% .   A paragraph, just to show where the first stops and the second ends.   You might wish to place a single image flush-left, or flush-right. You can specify the margins attribute as a pair of percentages for different left and right margins. The following are laid out with two margins, with a 0% left margin and right margin (respectively).    We place two images right above one another, to test spacing of consecutive images (provided they stay on the same page!).     Testing (2019-06-02)  All the images above are specified by filenames. We need to test how various options behave when incorporated into the (new) implementation for images, being introduced with solo images.  A tikz image recycled from above, now 40% width, with 40% left margin, 20% right margin.     A pgfplot image recycled from above, now 20% width, with 40% left margin, 40% right margin, and no longer legible.     An Asymptote image, with zero layout control, so 100% width.   moments on a lever    A Sage example, pushed to the right margin.   a standard parabola on the interval [-2,4]       Technical Details  The table below is a summary of how graphics and images are specified, constructed and manipulated. Additional processing is indicated by reference to the Python script pretext . Images need to be placed relative to the latex file that includes them during compilation, and placed relative to the HTML files which reference\/include them. Author-provided image files may be placed in any subdirectory, and the @source attribute should include the complete relative path with the subdirectory. Files generated by the pretext script will be specified in the output using the relative directory images , which can be changed. There is no reason author-provided files cannot also be placed in this same directory (presuming no duplicate names). [This table is presently more readable in HTML, the PDF version will improve.]    Element  Specification  latex \/Print  HTML  Notes    image\/@source  full relative path, w\/ extension  directly included  directly included  author-provided PNG , JPEG    image\/@source  full relative path, w\/o extension  presumes PDF  presumes SVG  author-provided    image\/latex-image-code  latex -compatible source  directly included  SVG via pretext  tikz, pgfplots, xypic    image\/sageplot  Sage code  PDF via pretext  SVG via pretext  PNG for 3-D    image\/asymptote  Asymptote code  PDF via pretext  SVG via pretext     In the early stages of a writing project, it may be best not to track provisional image files built with pretext under version control, and just regenerate them periodically (see the -r option for pretext ). As a project matures, then it makes sense to put stable files under version control for collaborators and others. In every case, managing graphics files (and other aspects of production), is much more pleasurable with a script (shell, Makefile, etc.)    Experimental Tactile Graphics  This subsection is a work-in-progress which will eventually allow some limited markup within the code for a TikZ diagram and allow the production of an SVG that can be embossed as a braille page that may be explored by a blind reader. Until that work is completed, this diagram should render nicely for other formats, such as HTML and latex . In other words, right now these images are being used for development and to test that existing routines have been modified in ways that preserve the creation of this image in the usual ways.  It is possible that images may be missing in HTML output or may not be consistent with current code (document or processing). The latex version should be accurate, but may be meaningless.  Some preliminary documentation follows the examples, none of which is guaranteed.   Simple label positioning (exterior)        Simple label positioning (interior)       This is a diagram of the complex 8-th roots of unity, from Judson's Abstract Algebra: Theory and Applications . It has been significantly reworked for this new approach, but retains the pedagogical intent of the original. It is being scaled by a factor of which may complicate scaling to a full embossed page for tactile graphics.   The complex roots of unity      Same diagram, but we have scaled to natural TikZ units, i.e. centimeters. Really, for convenience we have multiplied by , not . We have also labeled the axes with just and to test the use of Nemeth indicators since every label is a single inline <m> element.   The complex roots of unity        General Advice  It is best to design your diagram without using an overall scale factor later to compensate for not doing it carefully first. The default units in TikZ are centimeters.  Labels are discussed next. Scaling (magnification) as a tactile image works best if the bounding box of your diagram is determined by the bounding box of just the graphics elements. Rather than having labels extend outside the graphics bounding box to define a larger overall bounding box. This is a consequence of how TikZ scales an image (graphics scale, text does not).    Accessible Labels  In a TikZ diagram, name locations of interest explicitly, with the \\coordinate macro, such as \\coordinate (positive-y-axis) at (4,6); Both Cartesian and polar coordinates are supported by TikZ using different syntax. These names will not be seen by your reader, they are just used in the TikZ code.  Then use the names of these locations for the placement of labels. A large filled circle is a good shape to use. A radius that will scale to a radius of about 3 millimeters is a good choice. You will want to move your label away from the shape so there is no overlap, and thus the radius of your circle would be a good offset. The label can move in one of eight directions: south , southwest , west , etc. Try to arrange the direction of your label so that it does not overwrite other graphics elements of your diagram this will be confusing to a blind reader. So an example (spread over two lines) is  <label xml:id=\"pos-y-axis\" location=\"positive-y-axis\"  direction=\"northeast\" offset=\"3mm\"><m>y<\/m>-axis<\/label>  The xml:id is not strictly necessary, but can be useful for debugging.  When producing a tactile version of this diagram, the graphics elements of the diagram will be scaled up as much as possible to fit a whole 11.5 inch by 11 inch embossable page. The content will be replaced by braille cells (which are not scaled). The braille cells will get a 4 millimeter margin all around them, which will be a no-emboss zone. Finally, the offset will be scaled along with the graphics so the label should stay off of the shape being labeled.     Accessibility  An <image> should either have a non-empty <description> , a non-empty <shortdescription> , or set decorative to the value yes . Some of the following images comply, and some do not. There's not really anything to see here visually, this is testing notifications made elsewhere.    No description, no shortdescription, no decorative set to yes   No description, no shortdescription, decorative set to yes     No description, empty shortdescription, no decorative set to yes     No description, empty shortdescription, decorative set to yes       No description, too long shortdescription, no decorative set to yes   This shortdescription is too long because when alt text is longer than 125 characters, some screen readers will cut off reading the alt text after the 125th character.   No description, too long shortdescription, decorative set to yes   This shortdescription is too long because when alt text is longer than 125 characters, some screen readers will cut off reading the alt text after the 125th character.     No description, good shortdescription, no decorative set to yes   a white square outlined in blue covered by a black X   No description, good shortdescription, decorative set to yes   a white square outlined in blue covered by a black X     Description, no shortdescription, no decorative set to yes    A white square outlined in blue covered by a black X .    Description, no shortdescription, decorative set to yes    A white square outlined in blue covered by a black X .      Description, empty shortdescription, no decorative set to yes     A white square outlined in blue covered by a black X .    Description, empty shortdescription, decorative set to yes     A white square outlined in blue covered by a black X .      Description, too long shortdescription, no decorative set to yes   This shortdescription is too long because when alt text is longer than 125 characters, some screen readers will cut off reading the alt text after the 125th character.   A white square outlined in blue covered by a black X .    Description, too long shortdescription, decorative set to yes   This shortdescription is too long because when alt text is longer than 125 characters, some screen readers will cut off reading the alt text after the 125th character.   A white square outlined in blue covered by a black X .      Description, good shortdescription, no decorative set to yes   a white square outlined in blue covered by a black X   A white square outlined in blue covered by a black X .    Description, good shortdescription, decorative set to yes   a white square outlined in blue covered by a black X   A white square outlined in blue covered by a black X .       "
},
{
  "id": "section-graphics-3-3",
  "level": "2",
  "url": "section-graphics.html#section-graphics-3-3",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " New Zealand Landscape, commons.wikimedia.org , CC-BY-SA-2.0   "
},
{
  "id": "figure-complete-graph",
  "level": "2",
  "url": "section-graphics.html#figure-complete-graph",
  "type": "Figure",
  "number": "9.2",
  "title": "",
  "body": " Complete graph on vertices, from www.texample.net   "
},
{
  "id": "section-graphics-3-7",
  "level": "2",
  "url": "section-graphics.html#section-graphics-3-7",
  "type": "Remark",
  "number": "9.3",
  "title": "Footnote Buried.",
  "body": " Footnote Buried  Nested tcolorbox (in latex conversion) need special care when footnotes are interior.   A paragraph interior to a sidebyside with a footnote Interior footnote. buried inside the paragraph.  A second paragraph, just to avoid a one-panel warning.   The final paragraph of this remark, randomly placed, to test footnotes in latex conversions.  "
},
{
  "id": "figure-tikz-electronics",
  "level": "2",
  "url": "section-graphics.html#figure-tikz-electronics",
  "type": "Figure",
  "number": "9.4",
  "title": "",
  "body": " TikZ Electronics Diagram   a pile of electronic components wired together    "
},
{
  "id": "figure-tikz-cone3D",
  "level": "2",
  "url": "section-graphics.html#figure-tikz-cone3D",
  "type": "Figure",
  "number": "9.5",
  "title": "",
  "body": " TikZ Cone Drawing     "
},
{
  "id": "figure-pgfplots-demo",
  "level": "2",
  "url": "section-graphics.html#figure-pgfplots-demo",
  "type": "Figure",
  "number": "9.6",
  "title": "",
  "body": " Sample pgfplots plot   a Cartesian plane with a function graph, a parametric curve, and some points    "
},
{
  "id": "figure-pgfplots-data-demo",
  "level": "2",
  "url": "section-graphics.html#figure-pgfplots-data-demo",
  "type": "Figure",
  "number": "9.7",
  "title": "",
  "body": " External data in a pgfplots plot   a Cartesian plot of electric potential over time;    "
},
{
  "id": "figure-pgfplots-data-description",
  "level": "2",
  "url": "section-graphics.html#figure-pgfplots-data-description",
  "type": "Figure",
  "number": "9.8",
  "title": "",
  "body": " Full description with tabular   a plot of some data points   A Cartesian graph plotting the following data.                                   "
},
{
  "id": "figure-asymptote-levers",
  "level": "2",
  "url": "section-graphics.html#figure-asymptote-levers",
  "type": "Figure",
  "number": "9.9",
  "title": "",
  "body": " Asymptote Lever Demonstration   moments on a lever    "
},
{
  "id": "figure-asymptote-contour-plot",
  "level": "2",
  "url": "section-graphics.html#figure-asymptote-contour-plot",
  "type": "Figure",
  "number": "9.10",
  "title": "",
  "body": " Asymptote Contour Plot     "
},
{
  "id": "figure-asymptote-latex-macro",
  "level": "2",
  "url": "section-graphics.html#figure-asymptote-latex-macro",
  "type": "Figure",
  "number": "9.11",
  "title": "",
  "body": " Aymptote Lever, plus Integral     "
},
{
  "id": "figure-asymptote-workcone",
  "level": "2",
  "url": "section-graphics.html#figure-asymptote-workcone",
  "type": "Figure",
  "number": "9.12",
  "title": "",
  "body": " Work Cone (Asymptote Interactive 3D Image)     "
},
{
  "id": "graphics-asymptote-webgl-5",
  "level": "2",
  "url": "section-graphics.html#graphics-asymptote-webgl-5",
  "type": "Table",
  "number": "9.13",
  "title": "3D Image Keyboard Controls",
  "body": " 3D Image Keyboard Controls   Key Action  x Rotate around -axis  y Rotate around -axis  z Rotate around -axis  + Enlarge image  - Shrink image  h Return to home position   "
},
{
  "id": "figure-asymptote-surface",
  "level": "2",
  "url": "section-graphics.html#figure-asymptote-surface",
  "type": "Figure",
  "number": "9.14",
  "title": "",
  "body": " Asymptote 3-D Surface     "
},
{
  "id": "figure-sage-parabola",
  "level": "2",
  "url": "section-graphics.html#figure-sage-parabola",
  "type": "Figure",
  "number": "9.15",
  "title": "",
  "body": " A Sage standard parabola, on   a standard parabola on the interval [-2,4]    "
},
{
  "id": "figure-sage-double-plot",
  "level": "2",
  "url": "section-graphics.html#figure-sage-double-plot",
  "type": "Figure",
  "number": "9.16",
  "title": "",
  "body": " Two Sage plots on one set of axes     "
},
{
  "id": "figure-sage-exosagevec1",
  "level": "2",
  "url": "section-graphics.html#figure-sage-exosagevec1",
  "type": "Figure",
  "number": "9.17",
  "title": "",
  "body": " Les vecteurs et    Les vecteurs et sont tracés tel que demandé, respectivement en rouge et en bleu.     "
},
{
  "id": "figure-sage-multigraph",
  "level": "2",
  "url": "section-graphics.html#figure-sage-multigraph",
  "type": "Figure",
  "number": "9.18",
  "title": "",
  "body": " A Sage multigraph of a sentence     "
},
{
  "id": "figure-sage-polynomial-approximation",
  "level": "2",
  "url": "section-graphics.html#figure-sage-polynomial-approximation",
  "type": "Figure",
  "number": "9.19",
  "title": "",
  "body": " Sage polynomial approximations of      "
},
{
  "id": "figure-sage-implicit-surface",
  "level": "2",
  "url": "section-graphics.html#figure-sage-implicit-surface",
  "type": "Figure",
  "number": "9.20",
  "title": "",
  "body": " A Sage implicitly defined 3D surface     "
},
{
  "id": "section-graphics-8-3",
  "level": "2",
  "url": "section-graphics.html#section-graphics-8-3",
  "type": "Figure",
  "number": "9.21",
  "title": "",
  "body": " Inkscape Stars, Plain SVG (left), Inkscape SVG (right), from Bethany Llewellyn      "
},
{
  "id": "figure-raster-image-copy",
  "level": "2",
  "url": "section-graphics.html#figure-raster-image-copy",
  "type": "Figure",
  "number": "9.22",
  "title": "",
  "body": " Copy of raster image, in a figure, so now numbered and captioned   "
},
{
  "id": "figure-long-caption",
  "level": "2",
  "url": "section-graphics.html#figure-long-caption",
  "type": "Figure",
  "number": "9.23",
  "title": "",
  "body": " A caption can be a whole paragraph with lots of technical details, and maybe a hyperlink to something external, such as or PreTeXt . There could be some inline mathematics, such as . Would a knowl open here? Recursively? Let's see: . Display mathematics, side-by-sides, theorems, and lots of other things should be banned. Footnotes sound like a bad idea. Strange characters should be fine: .   "
},
{
  "id": "tactile-labels-exterior-figure",
  "level": "2",
  "url": "section-graphics.html#tactile-labels-exterior-figure",
  "type": "Figure",
  "number": "9.24",
  "title": "",
  "body": " Simple label positioning (exterior)      "
},
{
  "id": "tactile-labels-interior-figure",
  "level": "2",
  "url": "section-graphics.html#tactile-labels-interior-figure",
  "type": "Figure",
  "number": "9.25",
  "title": "",
  "body": " Simple label positioning (interior)      "
},
{
  "id": "tactile-experiment",
  "level": "2",
  "url": "section-graphics.html#tactile-experiment",
  "type": "Figure",
  "number": "9.26",
  "title": "",
  "body": " The complex roots of unity     "
},
{
  "id": "tactile-experiment-noscale",
  "level": "2",
  "url": "section-graphics.html#tactile-experiment-noscale",
  "type": "Figure",
  "number": "9.27",
  "title": "",
  "body": " The complex roots of unity      "
},
{
  "id": "section-further-reading",
  "level": "1",
  "url": "section-further-reading.html",
  "type": "Section",
  "number": "10",
  "title": "Further Reading",
  "body": " Further Reading   Specialized Subdivisions  In a longer work you might wish to have some references on a per-chapter basis, or similar. You can make a references subdivision anywhere to hold bibliographic items, and you can reference the items like any other item. For example, we can cite the article below , included an indication that a specific chapter may be relevant.    Exercises   No problem here, but the next two are in an exercise group with an introduction and a conclusion, along with an optional title. The two problems of the exercise group should be indented some to indicate the grouping.  N.B. An <exercisegroup> is meant to hold a collection of (short) exercises with common, shared, instructions. Do not use this structure to subdivide an <exercises> division, as you will eventually be disappointed. Instead, use the available, but under development as of 2019-11-02, <subexercises> , which requires a <title> .    Two Derivative Problems  exercise group two derivatives   In the next two problems compute the indicated derivative.   You could connect the image above with the exercises following as part of this introduction for the exercisegroup .    , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line. We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .  derivative cosine  , .    Note that the previous two problems used very different notation for the function and the resulting derivative.    This isn't really an exercise, but an explanation that the next <exercisegroup> has a title and no <introduction> , which once resulted in some aberrant formatting in latex output.   Two More Derivative Problems   Some common instructions would go here in the <introduction>   , . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line. We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : .   , .    Compute .   One of the few things you can place inside of mathematics is a fill-in blank. fill-in blank We demonstrate a few scenarios here. See details on syntax in the use is identical within mathematics.  Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.      More Exercises   This is not a real exercise, we just want to explain that this is another subsection of exercises, which has two consecutive exercise groups.    Introduction to first exercise group.  Only exercise of first group.  Conclusion to first exercise group.    Introduction to second exercise group.  First exercise of second group.  Second exercise of second group.  Conclusion to second exercise group.    An <exercisegroup> can have a cols attribute taking a value from 2 6. Exercises will progress by row, in so many columns. On a small screen, the HTML exercises may reorganize into fewer columns.   Addition is associative. First, add and to get , then add to arrive at .   Add seven to eight.    Addition is associative.  First, add and to get , then add to arrive at .   A simple argument.   And a bit more.    Add seven to eight.    Addition is associative. First, add and to get , then add to arrive at .   Add seven to eight.    Addition is associative. First, add and to get , then add to arrive at .   Add seven to eight.   This feature was designed with short drill exercises in mind. With long exercises, or exercises with long hints, answers, or solutions, there is a risk that the latex output will have bad page breaks in the vicinity (just before) such an exercise that occupies too much vertical space. Edit, rearrange, or use fewer columns to see if the situation improves.    Make a table and a graph for the function .                                 References  references within a section   These items are here to test basic formatting of references.   Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.   J. B. Conrey and D. W. Farmer  Mean values of -functions and symmetry  Internat. Math. Res. Notices  17  2000    Robert A. Beezer, A First Course in Linear Algebra , 3rd Edition, Congruent Press, 2012. An online, open-source A gratuitous footnote to test prior bug confusing this with a REMARK-LIKE <note> . offering.    H. Davenport  Multiplicative Number Theory  GTM  74  Springer-Verlag New York, NY  2000  xiv+177  A note may accompany a bibliographic item, such as saying the manuscript is under review. But it cannot contain any formatting.   Alexander Rosswell, Diffeomorphisms of Penciled Fiber Bundles , Mathematicians of America  2020 , 2  6 , 884 888.  , Diffeomorphisms of Penciled Fiber Bundles, Part 2 , Mathematicians of America  2021 , 3  4 , 102 103.   This is a conclusion, which has not been used very much in this sample. Did you see that the entry for has a short annotation? So you can make annotated bibliographies easily.    "
},
{
  "id": "exercises-null-problem",
  "level": "2",
  "url": "section-further-reading.html#exercises-null-problem",
  "type": "Exercise",
  "number": "10.2.1",
  "title": "",
  "body": " No problem here, but the next two are in an exercise group with an introduction and a conclusion, along with an optional title. The two problems of the exercise group should be indented some to indicate the grouping.  N.B. An <exercisegroup> is meant to hold a collection of (short) exercises with common, shared, instructions. Do not use this structure to subdivide an <exercises> division, as you will eventually be disappointed. Instead, use the available, but under development as of 2019-11-02, <subexercises> , which requires a <title> .  "
},
{
  "id": "exercisegroup-two-problems-4",
  "level": "2",
  "url": "section-further-reading.html#exercisegroup-two-problems-4",
  "type": "Exercise",
  "number": "10.2.2",
  "title": "",
  "body": ", . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line. We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : . "
},
{
  "id": "exercises-cosine-derivative",
  "level": "2",
  "url": "section-further-reading.html#exercises-cosine-derivative",
  "type": "Exercise",
  "number": "10.2.3",
  "title": "",
  "body": "derivative cosine  , .  "
},
{
  "id": "section-further-reading-3-4",
  "level": "2",
  "url": "section-further-reading.html#section-further-reading-3-4",
  "type": "Exercise",
  "number": "10.2.4",
  "title": "",
  "body": "This isn't really an exercise, but an explanation that the next <exercisegroup> has a title and no <introduction> , which once resulted in some aberrant formatting in latex output. "
},
{
  "id": "exercisegroup-two-more-problems-3",
  "level": "2",
  "url": "section-further-reading.html#exercisegroup-two-more-problems-3",
  "type": "Exercise",
  "number": "10.2.5",
  "title": "",
  "body": ", . This sentence is just a bunch of gibberish to check where the second line of the problem begins relative to the first line. We cross-reference the next problem in this exercise group. For the phrase-global form, the common element of the cross-reference and the target should be the exercises division, and not the enclosing exercisegroup : . "
},
{
  "id": "exercisegroup-two-more-problems-4",
  "level": "2",
  "url": "section-further-reading.html#exercisegroup-two-more-problems-4",
  "type": "Exercise",
  "number": "10.2.6",
  "title": "",
  "body": " , .  "
},
{
  "id": "section-further-reading-3-6",
  "level": "2",
  "url": "section-further-reading.html#section-further-reading-3-6",
  "type": "Exercise",
  "number": "10.2.7",
  "title": "",
  "body": "Compute . "
},
{
  "id": "section-further-reading-3-7",
  "level": "2",
  "url": "section-further-reading.html#section-further-reading-3-7",
  "type": "Exercise",
  "number": "10.2.8",
  "title": "",
  "body": " One of the few things you can place inside of mathematics is a fill-in blank. fill-in blank We demonstrate a few scenarios here. See details on syntax in the use is identical within mathematics.  Inside inline math (short, space for ):  Inside inline math (default, space for ):  Inside exponents and subscripts (each is space for the string 12 ). In this case, be sure to wrap your exponents and subscripts in braces, as would be good latex practice anyway:  Inside inline math (too long for this line probably, 40 characters long):  So use inside a displayed equation like this one.  Inside the second line of a multi-line display:  This fillin has the historical characters attribute for a fillin inside math: , which may be more convenient, but may not side properly in places like subscripts, superscripts, fractions, limits of integrals, and so on.   "
},
{
  "id": "exercises-section-multiple-2",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-2",
  "type": "Exercise",
  "number": "10.3.1",
  "title": "",
  "body": " This is not a real exercise, we just want to explain that this is another subsection of exercises, which has two consecutive exercise groups.  "
},
{
  "id": "exercises-section-multiple-3-2",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-3-2",
  "type": "Exercise",
  "number": "10.3.2",
  "title": "",
  "body": "Only exercise of first group. "
},
{
  "id": "exercises-section-multiple-4-2",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-4-2",
  "type": "Exercise",
  "number": "10.3.3",
  "title": "",
  "body": "First exercise of second group. "
},
{
  "id": "exercises-section-multiple-4-3",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-4-3",
  "type": "Exercise",
  "number": "10.3.4",
  "title": "",
  "body": "Second exercise of second group. "
},
{
  "id": "exercises-section-multiple-5-2",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-2",
  "type": "Exercise",
  "number": "10.3.5",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-3",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-3",
  "type": "Exercise",
  "number": "10.3.6",
  "title": "",
  "body": "Addition is associative. First, add and to get , then add to arrive at . "
},
{
  "id": "exercises-section-multiple-5-4",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-4",
  "type": "Exercise",
  "number": "10.3.7",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-5",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-5",
  "type": "Exercise",
  "number": "10.3.8",
  "title": "",
  "body": "Add seven to eight. "
},
{
  "id": "exercises-section-multiple-5-6",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-6",
  "type": "Exercise",
  "number": "10.3.9",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-7",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-7",
  "type": "Exercise",
  "number": "10.3.10",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-8",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-8",
  "type": "Exercise",
  "number": "10.3.11",
  "title": "",
  "body": "Addition is associative.  First, add and to get , then add to arrive at .   A simple argument.   And a bit more.  "
},
{
  "id": "exercises-section-multiple-5-9",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-9",
  "type": "Exercise",
  "number": "10.3.12",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-10",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-10",
  "type": "Exercise",
  "number": "10.3.13",
  "title": "",
  "body": "Add seven to eight. "
},
{
  "id": "exercises-section-multiple-5-11",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-11",
  "type": "Exercise",
  "number": "10.3.14",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-12",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-12",
  "type": "Exercise",
  "number": "10.3.15",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-13",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-13",
  "type": "Exercise",
  "number": "10.3.16",
  "title": "",
  "body": "Addition is associative. First, add and to get , then add to arrive at . "
},
{
  "id": "exercises-section-multiple-5-14",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-14",
  "type": "Exercise",
  "number": "10.3.17",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-15",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-15",
  "type": "Exercise",
  "number": "10.3.18",
  "title": "",
  "body": "Add seven to eight. "
},
{
  "id": "exercises-section-multiple-5-16",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-16",
  "type": "Exercise",
  "number": "10.3.19",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-17",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-17",
  "type": "Exercise",
  "number": "10.3.20",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-18",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-18",
  "type": "Exercise",
  "number": "10.3.21",
  "title": "",
  "body": "Addition is associative. First, add and to get , then add to arrive at . "
},
{
  "id": "exercises-section-multiple-5-19",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-19",
  "type": "Exercise",
  "number": "10.3.22",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-5-20",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-20",
  "type": "Exercise",
  "number": "10.3.23",
  "title": "",
  "body": "Add seven to eight. "
},
{
  "id": "exercises-section-multiple-5-21",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-5-21",
  "type": "Exercise",
  "number": "10.3.24",
  "title": "",
  "body": ""
},
{
  "id": "exercises-section-multiple-6",
  "level": "2",
  "url": "section-further-reading.html#exercises-section-multiple-6",
  "type": "Exercise",
  "number": "10.3.25",
  "title": "",
  "body": " Make a table and a graph for the function .                              "
},
{
  "id": "biblio-beezer-fcla-2",
  "level": "2",
  "url": "section-further-reading.html#biblio-beezer-fcla-2",
  "type": "Note",
  "number": "10.4.3.1",
  "title": "",
  "body": "An online, open-source A gratuitous footnote to test prior bug confusing this with a REMARK-LIKE <note> . offering. "
},
{
  "id": "section-lists",
  "level": "1",
  "url": "section-lists.html",
  "type": "Section",
  "number": "11",
  "title": "List Calisthenics",
  "body": " List Calisthenics   Lists, Generally  ordered list  list ordered  unordered list  list unordered  Use ol to make an ordered list, ordered list and ul to make an unordered (bulleted) list. In both cases, use li for each entry. If an entry contains more than one paragraph, then each must be wrapped in p . unordered list  list ordered  list unordered   This section contains nested lists, to demonstrate how they get assigned labels (numbering, symbols). But we begin with two simple lists, demonstrating an ordered list and an unordered list. See the end of section for an example of a description list. Note in the source the optional use of a paragraph ( p ) for the list items of the list of colors.   First.  Second Footnote in an unstructured list item .  Third.   Red One of our favorite colors  Green  Yellow  Purple   Next, we have a list with no customization and multiple levels to test the defaults. latex allows a maximum of four levels of ordered\/numbered lists, and a total of six levels if some unordered lists are mixed in. The second-level defaults (lower-case Latin) are formatted slightly different in latex versus HTML. The HTML style is not easy to adjust, but you can specify the latex version to match if it is important. Note that to have nested lists you must structure your list items as paragraphs, since a list may only appear within a <p> element.   A title on a top-level item  Level 1, first.    Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 4, first.  Level 4, second.   Title on xref'ed list item  Level 4, third.    Level 3, third.     A title on a nested item  Level 2, third.     Level 1, third.   Items in ordered lists (only) may be be give an xml:id and then may be the target of an xref . We test three here, referencing down into the hierarchy above. Level 1, second: . Level 3, second: . Level 4, third: . Note that if a list item of an ordered list is contained within a list item of an unordered list, then its number will not be defined.  And now a four-level deep unordered list with the default labels supplied by PreTeXt (disc, circle, square, disc). Again, the defalt order for Markdown\/Jupyter (disc, square, circle, circle) is different than for latex and HTML (disc, circle, square, disc)   A title on a top-level item  Level 1, first.    Level 1, second.  Level 2, first.   Level 2, second.  Level 3, first.   Level 3, second.  Level 4, first.  Level 4, second.  Level 4, third.     A title on a nested item  Level 2, third.     Level 2, third.    Level 1, third.   And a total of six levels with a mix of ordered and unordered lists, the most that out-of-the-box- latex is able to handle.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 4, first.  Level 4, second.  Level 5, first.  Level 5, second.  Level 6, first.  Level 6, second.  Level 6, third.    Level 5, third.    Level 4, third.    Level 3, third.    Level 2, third.    Level 1, third.   Now, nested lists with the defaults replaced by custom choices. First, an ordered list, three deep, upper Roman numerals, then upper-case Latin, then more traditional Arabic numerals on the three elements of the third level. Note the adornments of the labels will be rendered in LaTeX, but not in HTML.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.  Level 3, first.  Level 3, second.  Level 3, third.    Level 2, third.    Level 1, third.   A nested unordered list, with labels given as squares on the outer list and nothing (blank) on the inner lists.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.    Level 1, third.   A nested ordered list, to test intramural cross-references.  Level 1, first.  Level 1, second.  Level 2, first.  Level 2, second.    Level 1, third. With a cross-reference to second list item, .  Level 1, fourth. Whose number should not change when the knowl just prior is opened.   An ordered list may begin at zero by using a numeral zero in the label attribute, instead of numeral one.  First   Second  Uno  Dos  Tres    Third   The next definition is very poorly worded. It is meant to test leading off with a list (bad form), for which latex normally begins right after the heading.   Group  Group   group definition paragraph initial list  There is a binary operation, denoted .  The operation is associative.  There is an identity element, .  For every element , there is an element (the inverse), such that .   If these conditions are met for a set , then we say is a group .    Exercises and References are specialized subdivisions you can put anywhere. They are implemented as top-level lists, so should share behavior. For example, an exercise may have many parts and when expressed as a list, should have the expected labels.  Similarly, References may have lists in their annotations. Unlikely? But possible.  The next two subdivisions are an Exercises subdivision and a References subdivision, which have lists within an exercise and a bibliographic item (respectively).    List Spacing, I  This is a short list that ends a subsection, so can be used to address the necessary spacing. We also test two XML elements separated by a space (which should not go missing).  One item.  Two  ducks .  Three items. Plus a few more words to check that long entries in a two column list look good.  Four items.  Another long entry that simultaneously tests that long entries look good in a list, and also tests an odd number of entries in a two column list.     List Spacing, II  This is another short list that ends a subsection, so can be used to address the necessary spacing.  Uno item.  Dos items.  Tres item.  Quattro items.   And a paragraph after that list so that spacing can be checked.    List items containing only inline math   Testing list items containing only math  There are many places where it makes sense to have a list of mathematical terms, or possibly equations. For example, one might wish to provide a list of derivative formulas. With such lists, the author may wish to have display mathematics, but almost certainly they don't want it centered. One can work around this by using the latex  \\displaystyle command. However, it would be nice if a list item containing only math used display mode by default.     A list item containing some text in a paragraph, as well as some inline math: .   A list item with text and math , not in a paragraph.        math in lists   Now, a p that isn't in a list, followed by a list that's in a p .      A list item starting with some math, followed by text, all in a p           The above assemblage had some lists in it, just to see what will happen. While we're at it, we might try adding lists that are in a list .   A list of items, some of which contain math    A first list item, containing some text. The next list item will contain only math, with the m tag inline with the li tag.   A list item with text and math , not in a paragraph.    The next two list items will contain, respectively, a list item containing only math, where the math is on a new line, then the same again, but with two new lines, and a list item containing math within a p , first inline, and then after a line break.                 And now, a list in a paragraph.     A paragraph that begins with text, then some math: And now some more text. The next two list items contain:   Math only, inline.    Math only, with a newline.    Math only, but in a paragraph. Also the next item on this list has math, just to see what happens in a nested list.                  Inclusion of any text other than math will kill the automatic display style. For example, this would happen if one were to add punctuation after the math.    ,     List items can have titles. We try that here, along with testing list items structured with paragraphs.   With \\displaystyle added automatically     Two paragraphs      One paragraph, extra text  So,    Two elements (only)  latex      Difficult List Items  In we were careful about lone bits of math inside list items. The <cd> element is used with indentation, which is likely superfluous inside a list item that is already being indented. Here we test lone <cd> elements inside of list items in various configurations.  Unordered list, one-deep.    Foo Bar Foo  Bar Foo Bar     This list item is a long paragraph with a <cd> in the middle which should be indented some to indicate its participation in the paragraph.  Foo Bar Foo  Bar  Bar Foo Bar  Foo  This list item is a long paragraph with a <cd> in the middle which should be indented some to indicate its participation in the paragraph.     Foo Bar Foo  Bar  Bar Foo Bar  Foo      Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at both the top and bottom of a list. Intervening paragraph, to illuminate spacing at top and bottom of a list.  Ordered lists, two-deep, mixed.   First item, outer level.    First inner item, cd only  Foo Bar Foo  Bar  Bar Foo Bar  Foo    Second inner item, a paragraph in a list item.    Third inner item, cd only  Foo Bar Foo  Foo Bar Foo  Bar Foo Bar        cd inside second item, outer level  Bar  Bar Foo Bar  Foo        Description Lists  Use dl to make a description list description list list description . Inside of those tags, use li for each entry. Then, use title to specify the term being described and p to specify the description.  A description list description list list description has a short term or phrase that is prominent, followed by a short description. It is modeled on the lists of similar structure in both latex and HTML. It makes for a nice medium-weight way to define terms, somewhere in-between the term tag which just makes a term prominent in a sentence, and a definition , which is set off, has a heading, a number, and a title. Do not try to manage the separation between the title and the description by employing punctuation (but you can include a question-mark or exclamation-point if necessary). For example, do not include a colon to the end of the title. This example is from Bob Plantz.   Central Processing Unit (CPU)  Controls most of the activities of the computer, performs the arithmetic and logical operations, and contains a small amount of very fast memory.    Memory  Provides storage for the instructions for the CPU and the data they manipulate.    Input\/Output (I\/O)  Communicates with the outside world and with mass storage devices ( , disks).    Bus!  A communication pathway with a protocol specifying exactly how the pathway is used. (The punctuation is just for testing.)     A geometric series. The formula is valid if .    Some presentations can be assisted by a hint from the author about the lengths of the titles. You can choose to provide a width attribute on a dl element with possible values narrow and medium . The value refers (somewhat confusingly) to the distance between the left margin and the description. The default is medium , which is illustrated above. Conversion to latex ignores the attribute. An example with narrow :   Red  The color of the sun at sunset.    Blue  The color of a clear sky. Also a synonym for depressed or sad , the title of a 1971 Joni Mitchell album (and more than a dozen other musical albums), the period of Picasso's work between 1901 and 1904, and much more!    Aqua  The color of shallow tropical waters. On a sunny day! (Testing footnotes in description lists for latex output.)    Math    Sorry, not a color but testing titles with math in them.    i before e except after c, unless it sounds like a as in neighbor and weigh  Get feisty about that weird counterfeit rule: seize the day and don't have a heifer, man.    Avocado  Avocado is the the color with hex code #568203 , and also the main ingredient in guacamole.    Magenta  Magenta is a color, and a character in Rocky Horror.    Zymurgist  A scientist who studies the chemical process of fermentation in brewing and distilling. Also the alphabetically last 9-letter word in the English language.    Byzantium  Byzantium is the the color with hex code #702963 , and also an ancient Greek city which later became known as Constantinople, and today is called Istanbul.    Convection  Circulating motion in a fluid.    Elementary  No literary detective ever said Elementary my dear Watson. In particular, Sherlock Holmes never said that.    Understand  Perceive the intended meaning of.    Washington  A state, a district, the man on the US $1 bill and on the US quarter. Did you ever notice that on the US dime, the value is stated as one dime ? But how is one to know that a dime is worth 10 cents?    Aquamarine  Aquamarine is a color, and a mineral.    Those who cannot remember the past are condemned to repeat it.  George Santayana wrote those words in 1905. A similar aphorism is misattributed to Winston Churchill. The idea is embodied in the 4th principle: PreTeXt respects the good design practices which have been developed over the past centuries.     The Riemann -function is defined by a Dirichlet series, valid for .    main() is a void function  A dl with width=\"narrow\" might be a useful way to give commentary on a program listing.      Named Lists  named list list named  A list can be wrapped with a <list> element, so that it earns a number, can be given a title and have an introduction and conclusion. Cross-references to individual list items get a bit involved as they are prefixed with the number of the list and then the number of the item, so conceivably you could get a number like 4.5.3:2.a.ii . The colon is used to indicate the transition from the number of the list within divisions and the numbers coming from the list hierarchy, since it has two small dots.   Colors of the Rainbow   Because the colors are always in the same order, an ordered list is natural here. The colors change continuously, but are often divided up into large ranges that human perception can easily distinguish.    Red  Orange  Yellow  Green  Blue  Indigo  Violet    So some people use the acronym ROY-G-BIV to remember this sequence.    This next list is used for testing cross-references to it. See .   A named list of targets   This is the introduction to this named list, which references an item within, via the hybrid text attribute: . At one time this paragraph was inadvertently centered that bug has been fixed.       A and i  A and ii  A and iii        B and a  B and b  B and c (target of some cross-references)        The next three cross-references point to a list item, just above. It is interesting because the list is named, hence numbered. The global reference uses the full number, while the local reference uses the number from within the list. The hybrid reference recognizes that the target is within the same named list, so the number can be shorter. An identical hybrid cross-reference appears within the <introduction> to this list, an immediately following, but outside the <list> .  Cross-reference within named list ( global ):  Cross-reference within named list ( hybrid ):  Cross-reference within named list ( local ):     C and bullet and 1  C and bullet and 2  C and bullet and 3     C and bullet  C and bullet       This is a paragraph just outside the preceding named list, which references an item within, via the hybrid text attribute: .  list This is a paragraph with three lists contained within it. For HTML output we have to inside-out the lists.  A one item ordered list.  In other words, the text before, after, and between, needs to each be encapsulated as an HTML p element of its own.  A one item unordered list.  Including definition lists.   Define Me  A one item definition list.   That's all!  A one item list, whose item is a paragraph with two contained ordered lists, separated by text.  Introductory text.  First item, first list.  Intermediate text.  First item, second list.  Concluding text.     Testing List Decompositions  A list in a paragraph is a construction in HTML that browsers try to correct, which leads to unpredictable results, so we have to decompose an author's paragraph with lists into a sequence of HTML paragraphs, interrupted by lists. This subsection is only relevant to HTML output, and only for testing. paragraph normal   This paragraph opens with an ordered list.  Testing the id, and other info that should be at the top of the paragraph.  Now the paragraph continues, and we have an index item here, so we can test cross-references back here. paragraph opens with list    Exercises (with lists)   This exercise should have several parts, and labels should follow the defaults for second-level lists (since the exercise is numbered according to the top-level default).  Exercise 1, first part.  Exercise 1, second part.  Exercise 1, second part, first refinement.    Exercise 1, third part.      Table Alignment Example         1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     This exercise (a list item really) has a table first. Default latex aligns it vertically above the exercise number. Placement here tests correcting that alignment.    A small test of cross-references to subsidiary parts of exercises. Exercise 1, third part: . Exercise 1, second part, first refinement: .     References (with lists in Annotations)  Some book would be listed here.  Here is the annotation and an ordered list as part of that annotation.  Book 1, first part.  Book 1, second part.  Book 1, third part.      "
},
{
  "id": "section-lists-2-18",
  "level": "2",
  "url": "section-lists.html#section-lists-2-18",
  "type": "Definition",
  "number": "11.1",
  "title": "Group.",
  "body": " Group  Group   group definition paragraph initial list  There is a binary operation, denoted .  The operation is associative.  There is an identity element, .  For every element , there is an element (the inverse), such that .   If these conditions are met for a set , then we say is a group .   "
},
{
  "id": "test-second-4",
  "level": "2",
  "url": "section-lists.html#test-second-4",
  "type": "List",
  "number": "11.2",
  "title": "A list of items, some of which contain math",
  "body": " A list of items, some of which contain math    A first list item, containing some text. The next list item will contain only math, with the m tag inline with the li tag.   A list item with text and math , not in a paragraph.    The next two list items will contain, respectively, a list item containing only math, where the math is on a new line, then the same again, but with two new lines, and a list item containing math within a p , first inline, and then after a line break.                "
},
{
  "id": "list-colors-rainbow",
  "level": "2",
  "url": "section-lists.html#list-colors-rainbow",
  "type": "List",
  "number": "11.3",
  "title": "Colors of the Rainbow",
  "body": " Colors of the Rainbow   Because the colors are always in the same order, an ordered list is natural here. The colors change continuously, but are often divided up into large ranges that human perception can easily distinguish.    Red  Orange  Yellow  Green  Blue  Indigo  Violet    So some people use the acronym ROY-G-BIV to remember this sequence.   "
},
{
  "id": "list-to-reference",
  "level": "2",
  "url": "section-lists.html#list-to-reference",
  "type": "List",
  "number": "11.4",
  "title": "A named list of targets",
  "body": " A named list of targets   This is the introduction to this named list, which references an item within, via the hybrid text attribute: . At one time this paragraph was inadvertently centered that bug has been fixed.       A and i  A and ii  A and iii        B and a  B and b  B and c (target of some cross-references)        The next three cross-references point to a list item, just above. It is interesting because the list is named, hence numbered. The global reference uses the full number, while the local reference uses the number from within the list. The hybrid reference recognizes that the target is within the same named list, so the number can be shorter. An identical hybrid cross-reference appears within the <introduction> to this list, an immediately following, but outside the <list> .  Cross-reference within named list ( global ):  Cross-reference within named list ( hybrid ):  Cross-reference within named list ( local ):     C and bullet and 1  C and bullet and 2  C and bullet and 3     C and bullet  C and bullet      "
},
{
  "id": "section-lists-10-2",
  "level": "2",
  "url": "section-lists.html#section-lists-10-2",
  "type": "Exercise",
  "number": "11.9.1",
  "title": "",
  "body": " This exercise should have several parts, and labels should follow the defaults for second-level lists (since the exercise is numbered according to the top-level default).  Exercise 1, first part.  Exercise 1, second part.  Exercise 1, second part, first refinement.    Exercise 1, third part.   "
},
{
  "id": "section-lists-10-3",
  "level": "2",
  "url": "section-lists.html#section-lists-10-3",
  "type": "Exercise",
  "number": "11.9.2",
  "title": "",
  "body": "  Table Alignment Example         1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     This exercise (a list item really) has a table first. Default latex aligns it vertically above the exercise number. Placement here tests correcting that alignment.  "
},
{
  "id": "biblio-undetermined-1",
  "level": "2",
  "url": "section-lists.html#biblio-undetermined-1",
  "type": "Note",
  "number": "11.10.1.1",
  "title": "",
  "body": " Here is the annotation and an ordered list as part of that annotation.  Book 1, first part.  Book 1, second part.  Book 1, third part.   "
},
{
  "id": "section-table-calisthenics",
  "level": "1",
  "url": "section-table-calisthenics.html",
  "type": "Section",
  "number": "12",
  "title": "Table Calisthenics",
  "body": " Table Calisthenics   That was a Sage cell just now, which has nothing to do with tables. But we needed someplace to test placement right after a division heading. Carry on.  A very minimal table, hence with left-justified cells, no borders. We do wrap the tabular element in a table element to get centering, numbering and a caption. Footnotes inside cells are tested here.   Some Colors    Red  Green Green can be a very sick looking color.  Yellow    Blue  White  Pink     Note that tables may be constructed using the latex Complex Table Editor tool online at latex-tables.com and then exported in PreTeXt syntax.  Tables can be used and abused many ways. We describe long division of polynomials by using vertical and horizontal borders on individual entries of a <tabular> . The division lines are slightly thicker than the subtraction lines. This is a good example of the typical abuse of tables for horizontal and vertical layout. At least we have called it a Figure, not a Table .   Polynomial Long Division                                                                 An example of aligning table cells' contents horizontally. See the source for comments.     Horizontal Alignment Example          1234567890  1234567890  1234567890  1234567890       [First  Second  Third  Fourth     A  B  C  D     1  2  3  4      Example from above, but now with horizontal rules, plus an extra row to test the bottom border. See the source for comments.    Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4      For a table without a caption, create a <tabular> and place it directly within the current division. This will allow control over the horizontal placment, but without a caption, there is no number, and the tabular cannot be cross-referenced.  One  Same example as before, but now with vertical rules. See the source for comments.   Vertical Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4       Progressively Thicker Rules Example        1111  2222  3333    aaaa  bbbb  cccc    AAAA  BBBB  CCCC      Column Span Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC     A list whose first item is a table. In latex output a \\leavevmode is necessary to keep this organized (item number, then table as content).    Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC       Example Environment with Leading Table    Column Spans, No col Elements, Nine Columns     1  2+3  4  5+6+7  8+9    1  2  3  4  5  6  7+8  9    1  2  3  4  5  6  7  8  9     This example tests several things. In latex output, figures, tables, listings and side-by-sides are floats whose placement can migrate, but we have tries to supress this behavior. However, a float that is the first item of an environment (like a theorem or an example) can still float to a position before its title. If that does not happen here, then our additional defenses are working.  This example also checks that the total number of columns is correctly computed from the first row, which features several colspan attributes.   A bare minimum table (one row with one cell) to test edge cases:   One entry table    One     Table cells with a fixed width where text wraps are known as paragraph cells . A cell will be created as a paragraph cell if and only if it has <p> children. And such cells should only have <p> children. The width of a paragraph cell is determined by a width attribute on the corresponding <col> (as a percentage). If the column has a non-paragraph cell with contents that are wider than the paragraph cells, results will be undesirable. There is presently no implementation for a paragraph cell that has a colspan greater than , although cells with colspan greater than that are above or below a paragraph cell will behave. Setting width on a <col> that has no paragraph cells may produce unexpected results. A valign for the parent <row> (or the ambient <tabular> ) can control vertical alignment (top, middle, or bottom). A paragraph cell's halign attribute (left, center, right, or justify) controls how the text is justfied. Cells inherit halign from <row> , <col> , and <tabular> in that order of preference. In a non-paragraph cell where halign='justify' , the horizontal alignment will match the behavior of halign='left' .   Time Units        Unit  Stands For  Definition  Roughly     second  the duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom  an extraneous paragraph just to demonstrate the inter-paragraph formatting.  the time it takes you to say the phrase differential calculus     minute  exactly seconds  how long it takes to microwave a full dinner plate from the refrigerator     hour  exactly seconds; exaclty minutes  the length of one episode of a premium cable television show     Table cells can have multiline content using <line> elements. This is not the same thing as a paragraph cell line breaking will happen precisely where the author tells it to. A <line> will not break, even on a narrow screen. If a cell uses a <line> , it must only use a sequence of <line> s and no other content. As with paragraph cells, you can use a valign attribute for the row.   Dr. Seuss lines     One Fish  Two Fish  Red Fish  Blue Fish    I am the Lorax.  I speak for the trees.  Self-referential:    Look at me!  Look at me!  Look at me NOW!  It is fun to have fun.  But you have  to know how.      This is a table torture test with many combinations of halign , valign , colspan , <p> children, and <line> children.   Table Torture Test                     Cell too wide     Lf md  Lef mid par cel  Rt md  Rig mid par cel  Cn md  Cen mid par cel  Js md  Jus mid par cel jus mid par cel     Colspan=2 lef mid with lines  Colspan=3 rig mid  Lines Between Par  Lines Between No Par  Par in row with lines     L t  Lef top par cel  R t  Rig top par cel  C t  Cen top par cel  J t  Jus top par cel jus top par cel     L b  Lef bot par cel  R b  Rig bot par cel  C b  Cen bot par cel  J b  Jus bot par cel jus bot par cel     Colspan=3 lef bot  Colspan=2 rig bot with lines  Lines Under Par  Lines Under No Par  Par in row with lines      And now a <sidebyside> with a <table> and a <tabular> to check that width is scaled appropriately. See Section to learn about <sidebyside> s.   Some text from the US Constitution       A1.S1  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.  Should be 50% of 45% except perhaps on small screens.        A1.S2.C1  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.  Should be 50% of 55% except perhaps on small screens.      Tables are formed in latex output with copious use of the \\multicolumn macro to override more global alignment settings, and to spread the content of one cell across several columns. However, sometimes latex 's special characters have behaved badly in this situation. So the table below, two items per row, is just designed for latex testing. But of course, it should still render fine in other formats. The three test cases are from , but without 50 alphabetic characters and 8 digits, which should not be problems in this context. In order to test the use of a percent sign ( % ) in a URL, we follow it by two hex digits, specifically, 58 , which is a way to represent the character X in a URL . The first column's entries are forced to be wrapped in a \\multicolumn by specifying their horizontal alignment. The second column's entries will not be wrapped in a \\multicolumn . So the two columns will look identical, other than the first having a left alignment, and the second has the default center alignment. (This table is known to render poorly in a Jupyter notebook. The cause is four dollar signs present in rows 1 and 3, and is explained in .)   Problematic Table Cells for latex    1  09az%-._~:\/?#[]@!$&'()*+,;=  09az%-._~:\/?#[]@!$&'()*+,;=    2  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=    3       Now, the same table repeatedly, but with different headers. No care has been taken with alignment or rules, which could improve how these look.   No Headers    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Two Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Vertical Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Vertical Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Two Vertical Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, with Rules    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      One Row Header, Multiline, with Rules    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     The next table has a progression of thicker rules in the header, plus a progression of thicker rules across the columns. For testing, not for aesthetics.   Two Row Header, Many Rules        State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     We now finish this section with some long tables. Ones that will not fit on a single printed page. So this is only of interest when producing this sample article as a PDF . First a naked tabular, which should force a new page to start, and then still overrun the end of the page.    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Now the same <tabular> , but within a <table> . Behavior should be similar, a new page and then it overruns the bottom of the page.   A Lot of Colors    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink     When you wish to allow a <tabular> to split itself at a page break, you can add the attribute break with the value yes . Certainly this will control a <table> or <tabular> which is longer than a page, but will also allow a shorter one to break. This might useful in a draft stage before undertaking page-fitting.  Here is the long <tabular> again, but with the break attribute set to yes .    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Here is the long <table> again, but with the break attribute set to yes on the tabular .   A Lot of Colors, Breaking    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink     This device is not ideal, as some features of tables are not behaving as expected. More precisely, we switch from the standard latex  tabular environment to the longtable environment from the package of the same name when table-breaking is requested. So there may be some undesirable interaction with other packages. For one, full-width horizontal rules seem to become as wide as the page (rather than as wide as the tabular). The following table is repeated but as a breakable <tabular> . The longtable package documentation suggests it accomodates the array package, but it also seems to make a variety of redefinitions. Furthermore, a panel of a side-by-side cannot be a breakable tabular, or a latex compilation error occurs.   Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4      Here is a consecutive pair of bare  <tabular> to test vertical space between them.                                    The longtable package allows for headers and footers indicating continued tables. A possible enhancement is to support this feature in the case of a long table.  "
},
{
  "id": "section-table-calisthenics-5",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-5",
  "type": "Table",
  "number": "12.1",
  "title": "Some Colors",
  "body": " Some Colors    Red  Green Green can be a very sick looking color.  Yellow    Blue  White  Pink    "
},
{
  "id": "section-table-calisthenics-8",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-8",
  "type": "Figure",
  "number": "12.2",
  "title": "",
  "body": " Polynomial Long Division                                                                "
},
{
  "id": "section-table-calisthenics-10",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-10",
  "type": "Table",
  "number": "12.3",
  "title": "Horizontal Alignment Example",
  "body": " Horizontal Alignment Example          1234567890  1234567890  1234567890  1234567890       [First  Second  Third  Fourth     A  B  C  D     1  2  3  4     "
},
{
  "id": "horizontal-rules-table",
  "level": "2",
  "url": "section-table-calisthenics.html#horizontal-rules-table",
  "type": "Table",
  "number": "12.4",
  "title": "Horizontal Rules Example",
  "body": " Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "section-table-calisthenics-16",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-16",
  "type": "Table",
  "number": "12.5",
  "title": "Vertical Rules Example",
  "body": " Vertical Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "section-table-calisthenics-17",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-17",
  "type": "Table",
  "number": "12.6",
  "title": "Progressively Thicker Rules Example",
  "body": " Progressively Thicker Rules Example        1111  2222  3333    aaaa  bbbb  cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-18",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-18",
  "type": "Table",
  "number": "12.7",
  "title": "Column Span Example",
  "body": " Column Span Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-20-1-1-1",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-20-1-1-1",
  "type": "Table",
  "number": "12.8",
  "title": "Table Alignment Example",
  "body": " Table Alignment Example        1111, 2222  3333    aaaa  bbbb,cccc    AAAA  BBBB  CCCC    "
},
{
  "id": "section-table-calisthenics-21",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-21",
  "type": "Example",
  "number": "12.9",
  "title": "Example Environment with Leading Table.",
  "body": " Example Environment with Leading Table    Column Spans, No col Elements, Nine Columns     1  2+3  4  5+6+7  8+9    1  2  3  4  5  6  7+8  9    1  2  3  4  5  6  7  8  9     This example tests several things. In latex output, figures, tables, listings and side-by-sides are floats whose placement can migrate, but we have tries to supress this behavior. However, a float that is the first item of an environment (like a theorem or an example) can still float to a position before its title. If that does not happen here, then our additional defenses are working.  This example also checks that the total number of columns is correctly computed from the first row, which features several colspan attributes.  "
},
{
  "id": "table-minimal",
  "level": "2",
  "url": "section-table-calisthenics.html#table-minimal",
  "type": "Table",
  "number": "12.11",
  "title": "One entry table",
  "body": " One entry table    One    "
},
{
  "id": "table-time-units",
  "level": "2",
  "url": "section-table-calisthenics.html#table-time-units",
  "type": "Table",
  "number": "12.12",
  "title": "Time Units",
  "body": " Time Units        Unit  Stands For  Definition  Roughly     second  the duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium-133 atom  an extraneous paragraph just to demonstrate the inter-paragraph formatting.  the time it takes you to say the phrase differential calculus     minute  exactly seconds  how long it takes to microwave a full dinner plate from the refrigerator     hour  exactly seconds; exaclty minutes  the length of one episode of a premium cable television show    "
},
{
  "id": "table-multiline-cells",
  "level": "2",
  "url": "section-table-calisthenics.html#table-multiline-cells",
  "type": "Table",
  "number": "12.13",
  "title": "<abbr class=\"abbreviation\">Dr.<\/abbr> Seuss lines",
  "body": " Dr. Seuss lines     One Fish  Two Fish  Red Fish  Blue Fish    I am the Lorax.  I speak for the trees.  Self-referential:    Look at me!  Look at me!  Look at me NOW!  It is fun to have fun.  But you have  to know how.     "
},
{
  "id": "section-table-calisthenics-29",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-29",
  "type": "Table",
  "number": "12.14",
  "title": "Table Torture Test",
  "body": " Table Torture Test                     Cell too wide     Lf md  Lef mid par cel  Rt md  Rig mid par cel  Cn md  Cen mid par cel  Js md  Jus mid par cel jus mid par cel     Colspan=2 lef mid with lines  Colspan=3 rig mid  Lines Between Par  Lines Between No Par  Par in row with lines     L t  Lef top par cel  R t  Rig top par cel  C t  Cen top par cel  J t  Jus top par cel jus top par cel     L b  Lef bot par cel  R b  Rig bot par cel  C b  Cen bot par cel  J b  Jus bot par cel jus bot par cel     Colspan=3 lef bot  Colspan=2 rig bot with lines  Lines Under Par  Lines Under No Par  Par in row with lines     "
},
{
  "id": "table-consitution-text",
  "level": "2",
  "url": "section-table-calisthenics.html#table-consitution-text",
  "type": "Figure",
  "number": "12.15",
  "title": "",
  "body": " Some text from the US Constitution       A1.S1  All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.  Should be 50% of 45% except perhaps on small screens.        A1.S2.C1  The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature.  Should be 50% of 55% except perhaps on small screens.     "
},
{
  "id": "table-latex-problems",
  "level": "2",
  "url": "section-table-calisthenics.html#table-latex-problems",
  "type": "Table",
  "number": "12.16",
  "title": "Problematic Table Cells for <span class=\"latex-logo\">L<span class=\"A\">a<\/span>T<span class=\"E\">e<\/span>X<\/span>",
  "body": " Problematic Table Cells for latex    1  09az%-._~:\/?#[]@!$&'()*+,;=  09az%-._~:\/?#[]@!$&'()*+,;=    2  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=  e.com\/09az%58-._~:\/?#[]@!$&'()*+,;=    3      "
},
{
  "id": "section-table-calisthenics-35",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-35",
  "type": "Table",
  "number": "12.17",
  "title": "No Headers",
  "body": " No Headers    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-36",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-36",
  "type": "Table",
  "number": "12.18",
  "title": "One Row Header",
  "body": " One Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-37",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-37",
  "type": "Table",
  "number": "12.19",
  "title": "One Row Header, Multiline",
  "body": " One Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-38",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-38",
  "type": "Table",
  "number": "12.20",
  "title": "Two Row Headers",
  "body": " Two Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-39",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-39",
  "type": "Table",
  "number": "12.21",
  "title": "One Vertical Row Header",
  "body": " One Vertical Row Header    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-40",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-40",
  "type": "Table",
  "number": "12.22",
  "title": "One Vertical Row Header, Multiline",
  "body": " One Vertical Row Header, Multiline    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-41",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-41",
  "type": "Table",
  "number": "12.23",
  "title": "Two Vertical Row Headers",
  "body": " Two Vertical Row Headers    State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-42",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-42",
  "type": "Table",
  "number": "12.24",
  "title": "One Row Header, with Rules",
  "body": " One Row Header, with Rules    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-43",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-43",
  "type": "Table",
  "number": "12.25",
  "title": "One Row Header, Multiline, with Rules",
  "body": " One Row Header, Multiline, with Rules    State  Population   Area  (sq. mi.)    Statehood  (Year)     Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-45",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-45",
  "type": "Table",
  "number": "12.26",
  "title": "Two Row Header, Many Rules",
  "body": " Two Row Header, Many Rules        State  Population  Area  Statehood      (sq. mi.)  (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "section-table-calisthenics-49",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-49",
  "type": "Table",
  "number": "12.27",
  "title": "A Lot of Colors",
  "body": " A Lot of Colors    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    "
},
{
  "id": "section-table-calisthenics-54",
  "level": "2",
  "url": "section-table-calisthenics.html#section-table-calisthenics-54",
  "type": "Table",
  "number": "12.28",
  "title": "A Lot of Colors, Breaking",
  "body": " A Lot of Colors, Breaking    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    Red  Green  Yellow    Blue  White  Pink    "
},
{
  "id": "horizontal-rules-breakable-table",
  "level": "2",
  "url": "section-table-calisthenics.html#horizontal-rules-breakable-table",
  "type": "Table",
  "number": "12.29",
  "title": "Horizontal Rules Example",
  "body": " Horizontal Rules Example          1234567890  1234567890  1234567890  1234567890     First  Second  Third  Fourth     A  B  C  D     1  2  3  4     1  2  3  4     "
},
{
  "id": "section-interactive-authored",
  "level": "1",
  "url": "section-interactive-authored.html",
  "type": "Section",
  "number": "13",
  "title": "Interactive Elements, Authored in Javascript",
  "body": " Interactive Elements, Authored in Javascript   Interactive Elements, Authored   Interactive Elements, Authored  interactive elements authored  embedded interactive elements authored    When outputting Web page versions, it is possible to embed a variety of dynamic interactive elements. In a latex \/PDF version, these will necessarily need to be replaced by some static substitute, such as a screenshot. See for the specifics of embedding instances of the Sage Cell Server, which is more elaborate, and not entirely similar.  Interactives in this section are those for which you provide code you have authored. Generally, the libraries involved to support this have open licenses, though the player for GeoGebra may be an exception. Creating these assumes some familiarity with HTML and Javascript. See for more interactives that are perhaps simpler to create or use.  (2018-06-22) Almost everything in this section is under active development and not stable yet. Feel free to experiment and make suggestions and requests. This page takes a while to completely load, so be patient.    HTML5 Canvas  HTML5 introduced the <canvas> element, which can be thought of a blank slate, a place to draw or write on. So PreTeXt has the <slate> element for a similar purpose. Generally, but not exclusively, HTML5 writes on a <canvas> using the Javascript language. We demonstrate this approach to interactive diagrams in this subsection.  The following examples are from David Austin's excellent Understanding Linear Algebra textbook, which can be found at  merganser.math.gvsu.edu\/david\/linear.algebra\/ula\/index.html  David's contribution of examples, and assistance designing the PreTeXt elements is greatly appreciated. Alright, let's learn some linear algebra. Yes, there are some learning opportunities in this subsection.   A simple eigenvector demonstration    The interactive in shows a vector in red, and the matrix-vector product in grey, for a particular matrix . The four entries of the matrix are coded into the interactive. Can you deduce simply by using the interactive? Which theorem is the key?   Eigenvector demonstration    The next example has ten <slate> elements communicating with each other, and arranged with the layout features of a <sidebyside> (see ).   Affine Transformations       If your <interactive> employs a <slate> with a surface attribute whose value is html , then you are advised to augment each top-level ( HTML ) element within the <slate> with the attribute:  xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\"  This will identify all of the elements within the <slate> as HTML elements and not as PreTeXt elements. The danger is that elements with the same name in both languages, such as <li> and <table> , will be mis-identified. This could be harmless, but could also create chaos, such as disrupting numbering of PreTeXt elements.  See the source code of this document for examples:  , .  Note that the HTML that is output can vary slightly from your source in small, harmless ways, such as empty (self-closing) elements being output with both an opening and a closing tag. Please report any significant discrepancies. Soon this requirement will be enforced in the code.   The following example was contributed by Rick Roesler. The <figure> is comprised of four <stack> elements within a <sidebyside> . By varying the time in the top box, the reader can observe the displacement, velocity, and acceleration of a ball thrown upward with an initial velocity of 30 m\/s.   1-Dimensional Kinematics    It is also possible to add <script> elements within an interactive that contain properly escaped JS code. These elements will be placed at the end of the document created to hold the interactive content and can interactive with the other elements within the interactive but can not directly interact with the surrounding page.  Authors are strongly discouraged from trying to incorporate complex code in the form of a <script> , but it can be a useful tool to call more complex code that is linked via source on the <interactive> .  This example uses a <script> to draw Hello World to a <slate>    A simple embedded script example      D3.js  D3.js  D3 is a Javascript library for Data-Driven Documents , which might greatly enhance some data you wish to display. In short, it uses the animation capabilities of SVG . Available examples seem sensitive to the version of the library, so we have examples using different versions. Use the version attribute on <interactive> to specify the version number. The default is 5 .  The first example uses the force layout and collision detection from Version 3. (The necessary commands are very different in Version 4.) Pretend you are a working shepherding dog. Can you separate, and catch, one of the herd?  This is adapted from a block by Mike Bostock with a GPL license. A similar demonstration, only using an HTML5 canvas is at .   Force layout and collision detection    Similar, but different, this demonstration of a graph layout uses Version 4 of the library. Technical notes:  We have changed the size of the nodes, and their number, to fit in a smaller space.  The Javascript script uses introspection to size itself, which would be a good general practice.   This is adapted from a block by shimizu with a GPL license.   Graph Layout    Graph Planarity  Can you move the vertices to new locations such that the resulting graph is planar? (In other words, no edges cross?)   Finally an example that actually uses some data. Here is the description from the original block by Martin Chorley with an MIT License.   This visualisation uses a D3 force simulation to show the Twitter relationships between the Assembly Members in the Welsh Assembly in terms of the number of times each assembly member has mentioned another assembly member in a tweet.  Twitter relationships were mined on 22\/03\/2017, and are representative of the conversational relationships on that date. Links between AMs represent a conversational relationship: one AM has mentioned the other. Party colour indicates the direction of the mention.  Hover over the nodes to fade out non-connected nodes.  Rather than using intermediate nodes to create curved links (as in Mike Bostock's block), this adds curves by adding a calculated control point for each edge.   Technical notes:  Once the nodes organize themselves (automatically in the beginning), they cannot be moved.  We have adjusted the margins in an attempt to keep names visible on the right side, but without giving up too much space.  We have adjust the repelling force, and the collision buffer, to better fit the available space.  This example required its own CSS , which we have included as part of the <interactive> .  The data collected from the Twitter analysis is contained in a JSON file, mention_network.json , and where the script loads that file, it has a hardcoded path. So this example is a bit brittle, should that file move.    Tweet mentions within the Welsh Assembly      SVG  Entirely similar to using an HTML5 canvas element ( ), it is possible to control an SVG element with Javascript. This example is from Mark McClure.  Look carefully at the source and rendering of this example as HTML . The functions to choose from via radio buttons, and the change in , denoted later as , are being rendered as mathematics by the Javascript MathJax library. However, this cannot be accomplished with simply $...$ nor by simply \\(...\\) , but instead by using the \\(...\\) and then also wrapping that in a <span> element with a class attribute set to process-math . (The latter is how we instruct MathJax as to which parts of a page to process, or not). So to have MathJax render a nice in this context (math inside HTML inside a <slate> inside an <interactive> ) would be accomplished with  <span class=\"process-math\">x^2<\/span>    Tangent and secant slopes    Changing Secant Lines  When discussing the derivative as a limit, we think of the point of tangency as being fixed (the green point in ) and the other point defining the secant line as changing (the red point in ). Switch it up! Fix a large value of (positive or negative) and then change the point of tangency (the green point). Discuss what you observe.     JSXGraph  JSXGraph  JSXGraph is a cross-browser JavaScript library for interactive geometry, function plotting, charting, and data visualization in the web browser. Now a <slate> will be what JSXGraph calls a board . Again, you use Javascript to write onto a <slate> , but have some powerful shortcuts available from the JSXGraph library. For this reason, PreTeXt calls JSXGraph a language , similar in may respects to how Sage is a language, but is really a Python library. So realize that the syntax for using JSXGraph is that of Javascript.  Place Javascript inside a file that is specified with the source attribute of the <interactive> element. Then just be certain that xml:id of the <interactive> element is passed as the HTML  id in an (early) call to JSXGraph's initBoard() method.  The plot below is the curve in polar coordinates, for . It may be manipulated with the sliders to control the shape of the curve. Point is contrained to the curve, but may be dragged to a new location. At the tangent line and normal line are plotted as dashed red lines. Use the controls in the lower left to adjust the viewing window. This Archimedean Spiral is taken from the JSXGraph example wiki . The code could be written in 7 lines. Width is 80% and aspect ratio is 4:3.   The Archimedian Spiral ,  Archimedian Spiral    Here is a more elaborate example, from the JSXGraph Showcase , titled Infinity .  There are two active sliders to control the shape and shading of the graphic, and hovering the mouse near one of the edges will highlight the entirety of one of the 30 quadrangles. Finally, each of the four red corners may be dragged to a new location. Code is 47 lines. Width is 60% and aspect ratio is the default, 1:1, a square.   Infinity, from the JSXGraph Showcase    Here are the two new examples. They have been included in a sidebyside layout element with equal widths (see ) so they can be placed horizontally across the page. They are not wrapped as figures, so cannot be cross-referenced. These are again from the JSXGraph example wiki , the left being Fermat's Spiral and the right being a demonstration of B-splines.      Finally, a piecewise function you can control, with traces of the domain values and range values in two other JSXGraph boards. Boards and HTML buttons have been laid out using the sidebyside layout element.   Piecewise Function     Generally, we load an interactive into an HTML iframe to sandbox (isolate) it from other interactives. We does this for your own protection. So, for example, one interactive cannot talk to another. If two <slate> need to communicate, then they are related, and should be placed into a single <interactive> , allowed to layout themselves, or grouped within a <sidebyside> allowing finer control. Even if we have this under control, you might still enjoy reading Your JS is a Mess at mikecavaliere.com\/your-js-is-a-mess-javascript-namespacing\/ .    JessieCode  JessieCode  JessieCode is a scripting language for JSXGraph. It provides the core geometric and graphing features of JSXGraph without accessing the underlying JavaScript. In order to use JessieCode, you simply create the HTML <div> element as you would for any other JSXGraph interactive plot and then provide the JessieCode script, which focuses on the geometric elements.  Because JessieCode is provided by JSXGraph, the interactive platform is jsxgraph . The <slate> , however, uses surface with value jessiecode . The script can be embedded directly in your code. As usual, you would need to remember to escape the special characters. JessieCode uses < and > for inequalities as well as for declaring objects used to style geometric elements, and && is the boolean AND operator. Alternatively, you can provide the file as a separate resource, providing the URL with a source attribute. Attributes defining the JSXBoard at the time it is created should be included as attributes of the <slate> , including boundingbox , axis , and grid .  For this first example, the JessieCode was included directly in the XML source as the contents of the associated slate.   Finding the Tangent Line of a Quadratic Function     For this second example, the JessieCode was included through an associated script file, loaded by the browser.   Graph of a function that is continuous but not differentiable at because the slope of the secant line has no limit.      Sage Interacts  Sage interacts  Sage, and the Sage Cell Server, support interactive demonstrations, called interacts .  The interactive elements are nearly trivial to construct.  An interact is simply a single Python function (acted on by a decorator).  You have the full mathematical power of Sage at your disposal, so can do some very powerful computations with high precision (or exactly).  The interface is not as polished as what you can achieve with Javascript libraries.  Graphics refresh with a round-trip to the server, so are not nearly as fluid as with other tools.  Note that each interact is insulated from the others, unlike our other employment of the Sage Cell Server.  This example is by Marshall Hampton, taken from the Sage interact wiki , specifically Numerical integrals with the midpoint rule .     Numerical integrals using the midpoint rule      Geogebra  To embed a GeoGebra applet as-is from GeoGebra's Classroom Resources site (by material ID), see . To design your own applet (either from scratch, or modifying something that already exists in one of those three forms) you may use one of Geogebra's Apps to embed the material in your document. (But note, use of the App comes with licensing restrictions.) PreTeXt will handle most of the technical details for you.  Do one of the following:  Identify a material ID from GeoGebra's Classroom Resources site. You might even make the material yourself on that site.  Obtain a .ggb file from GeoGebra. You might construct something on a desktop installation of GeoGebra and save it. If you have a base64-encoded string for a GeoGebra applet, but you don't have a .ggb file, you can decode the string and save the result. For example, at .  Obtain a base64 encoded string for a GeoGebra applet. You might first open a .ggb file in a desktop installation of GeoGebra, and push ctrl-shift-B (command-shift-B on a Mac) and then the string will be in your clipboard.  None of the above, with the intention to make an applet from scratch.   Then mimic the examples that follow, using GeoGebra API commands documented at Geogebra API Manual , but do not include the ggbApplet. or applet. used in examples to prefix the functions that part of the code will be provided automatically by PreTeXt .  Jack Green created an applet on the Classroom Resources site with ID D4s2v4ft , which you may view at . Suppose you would like to use this in your project, but change something about it. We will change something trivial, making the -axis ticks be separated apart instead of apart. We also decide we want a different aspect ratio and overall width. One gotcha: the original applet is loaded and then PreTeXt uses width and aspect attributes to resize the viewing window using the top left corner as an anchor. This does not rescale axes and that may leave you with important elements missing from the viewing window. So here we reset the viewing window to return to values that are in the original. Lastly, we disable zooming, which is not helpful for this applet. To do each of these things, we rely on the GeoGebra API manual at Geogebra API Manual . It is important to use one command per line.   GeoGebra: modified material ID    The same can be done with a .ggb file. Here we use two provided by David Rosoff, and one provided by Tevian Dray. The path to the file needs to be relative. First, David's original.   GeoGebra: .ggb file    Now we modify David's applet in a few ways.   GeoGebra: modified from .ggb file     GeoGebra: modified from .ggb file    In this one provided by Tevian Dray, we make no modifications (except for those imposed by the scaling). You will need to zoom out a bit, and then pan over some, to see all the pieces.   GeoGebra: a constructive proof that SAS congruence holds in Euclidean geometry (from Tevian Dray)    You could also use a base64-encoded string of the .ggb file. You might come across such a string somewhere, or you might generate one by opening a .ggb file in a desktop installation of GeoGebra, and pushing ctrl-shift-B (command-shift-B on a Mac) to get the string in your clipboard. If you do this, you could use a base64 attribute in place of the source attribute in the previous example. We don't do that here because such a string is generally over 5000 characters long and we are keeping the sample article source a bit cleaner.  Lastly, you may just wish to build something from scratch using GeoGebra API. Note that for accessibilty reasons, some objects are rendered unselectable with the setFixed command. Perhaps this should have been done with the previous examples, but that is more difficult when you do not know all of their names. Note that the GeoGebra scripting command setAttribute also changes the webpage's focus, so it is better to set the perspective using an attribute of the slate.   GeoGebra: from scratch      CircuitJS  CircuitJS is an electronic circuit simulator. A circuit can be described by a language, which PreTeXt will interpret and submit for rendering. The next two examples are identical, but provided in slightly different ways, see the PreTeXt source for more. Preview images for PDF will be added later.   CircuitJS Example (source via an encoded attribute)     CircuitJS Example (source authored directly)      IFrames from Files  An iframe is an HTML element that allows embedding of a complete web page within another one. Here we use this device to provide interactive 3D diagrams built with other tools.  We begin with a Jupyter notebook hosted on . News of success on other hosts for Jupyter notebook servers will allow us to expand this description. We use a Sage kernel and create a 3D surface suggested by Juan Carlos Bustamante:  var('x,y')  plot3d(x^2 - y^2, (x,-1,1), (y,-1,1), color=\"orange\", mesh=true)  News of other computational engines that produce similar graphics will also allow us to further expand this description. Note that for the case of Sage 3D plots, support for the <sageplot> element makes this even easier. For example, see .  A button in the lower right allows for several options, one is Save as HTML , which will produce a complete self-contained web page we can recycle. We save this file with our other externally-created images, in a directory that we choose to name iframe you can use another name. Then we make an <interactive> with an iframe attribute that has the filename, starting from iframe\/ (in other words, do not include the name of your managed directory of external images).   Sage+Jupyter iframe     Note that the downloaded file has links to specific versions of the three.js library, which are beyond our control, and beyond your control. So there is a future where these images may need updating. You could put your source code into a (large) comment with your project's source for safe-keeping in the future. See for the server version.    threejs  Once upon a time there was an example here using the threejs 3D Javascript library. It was one of the project's examples , licensed with an MIT License, with minimal modifications.  But it would seem to have become a bit more complicated to embed and our example was not rendering. As of 2022-08-08, we have removed it. Of course, you can find it in the git repository, perhaps searching on the date string just mentioned. It woulld be interesting to see if our <interactive> framework could still support the changes.  The following two examples are meant to be instructive ( only ). The end result is accomplished in a much more straightforward way be the method in . We illustrate a way to get a three.js image out of an HTML page as a Javascript file and render it on a PreTeXt  <slate> . We follow the second method in a blog post from the -Category Cafe .  Open a Jupyter Notebook that utilizes a Sage kernel. This can be done easily at CoCalc (and for free initially).  Sketch a surface using Sage code. We recycle the suggestion from Juan Carlos Bustamante in :  var('x,y')  plot3d(x^2 - y^2, (x,-1,1), (y,-1,1), color=\"orange\", mesh=true)   Look for a button (in the lower-right) which will provide a menu option Save as HTML . Save the resulting HTML file, and open a copy in a text editor.   You are now looking for two HTML  script elements. One will tell you just which version of three.js is being used, vis a @src attribute. For the second example below we located  https:\/\/cdn.jsdelivr.net\/gh\/sagemath\/threejs-sage@r122\/build\/three.min.js  The @r122 will likely be a version number, which is a good thing for the longevity of your work. This will get used in the source attribute of your <interactive> , which will have platform set to javascript .  The second script element is likely huge and has many generic functions defined it. There may be a huge variable full of data points computed by Sage. Copy the contents of this script element into a new Javascript file (so use a .js extension). Do not edit in any way until you read further. Once adjusted, this file too gets specified in the source attribute of your <interactive> .   Your <interactive> needs a <slate> element for the graphic to draw on, and you will need to give it a proper xml:id attribute, plus teh surface will be set to div . Then you need to edit the Javascript file to connect the graphic with the slate, via IDs in your PreTeXt source and on teh HTML  div created by the slate. Look at the provided examples to see how. Do not make any other edits to this file, even if tempted.  Study the two examples below, and mimic how they were constructed.   First, the example given in the blog post referenced above.   threejs catenoid surface, from -Category Cafe    Second, the example from JC Bustamante.   threejs saddle by Sage     "
},
{
  "id": "figure-simple-eigenvector",
  "level": "2",
  "url": "section-interactive-authored.html#figure-simple-eigenvector",
  "type": "Figure",
  "number": "13.1",
  "title": "",
  "body": " A simple eigenvector demonstration   "
},
{
  "id": "interactive-html5-canvas-5",
  "level": "2",
  "url": "section-interactive-authored.html#interactive-html5-canvas-5",
  "type": "Checkpoint",
  "number": "13.2",
  "title": "",
  "body": "The interactive in shows a vector in red, and the matrix-vector product in grey, for a particular matrix . The four entries of the matrix are coded into the interactive. Can you deduce simply by using the interactive? Which theorem is the key? "
},
{
  "id": "figure-eigenvectors",
  "level": "2",
  "url": "section-interactive-authored.html#figure-eigenvectors",
  "type": "Figure",
  "number": "13.3",
  "title": "",
  "body": " Eigenvector demonstration   "
},
{
  "id": "figure-animation",
  "level": "2",
  "url": "section-interactive-authored.html#figure-animation",
  "type": "Figure",
  "number": "13.4",
  "title": "",
  "body": " Affine Transformations     "
},
{
  "id": "interactive-html5-canvas-9",
  "level": "2",
  "url": "section-interactive-authored.html#interactive-html5-canvas-9",
  "type": "Warning",
  "number": "13.5",
  "title": "",
  "body": " If your <interactive> employs a <slate> with a surface attribute whose value is html , then you are advised to augment each top-level ( HTML ) element within the <slate> with the attribute:  xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\"  This will identify all of the elements within the <slate> as HTML elements and not as PreTeXt elements. The danger is that elements with the same name in both languages, such as <li> and <table> , will be mis-identified. This could be harmless, but could also create chaos, such as disrupting numbering of PreTeXt elements.  See the source code of this document for examples:  , .  Note that the HTML that is output can vary slightly from your source in small, harmless ways, such as empty (self-closing) elements being output with both an opening and a closing tag. Please report any significant discrepancies. Soon this requirement will be enforced in the code.  "
},
{
  "id": "interactive-html5-canvas-11",
  "level": "2",
  "url": "section-interactive-authored.html#interactive-html5-canvas-11",
  "type": "Figure",
  "number": "13.6",
  "title": "",
  "body": " 1-Dimensional Kinematics   "
},
{
  "id": "figure-simple-js-script",
  "level": "2",
  "url": "section-interactive-authored.html#figure-simple-js-script",
  "type": "Figure",
  "number": "13.7",
  "title": "",
  "body": " A simple embedded script example   "
},
{
  "id": "section-interactive-authored-8-3",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-8-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "D3 "
},
{
  "id": "section-interactive-authored-8-6",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-8-6",
  "type": "Figure",
  "number": "13.8",
  "title": "",
  "body": " Force layout and collision detection   "
},
{
  "id": "section-interactive-authored-8-9",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-8-9",
  "type": "Figure",
  "number": "13.9",
  "title": "",
  "body": " Graph Layout   "
},
{
  "id": "section-interactive-authored-8-10",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-8-10",
  "type": "Checkpoint",
  "number": "13.10",
  "title": "Graph Planarity.",
  "body": "Graph Planarity  Can you move the vertices to new locations such that the resulting graph is planar? (In other words, no edges cross?)  "
},
{
  "id": "section-interactive-authored-8-14",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-8-14",
  "type": "Figure",
  "number": "13.11",
  "title": "",
  "body": " Tweet mentions within the Welsh Assembly   "
},
{
  "id": "figure-interactive-slopes",
  "level": "2",
  "url": "section-interactive-authored.html#figure-interactive-slopes",
  "type": "Figure",
  "number": "13.12",
  "title": "",
  "body": " Tangent and secant slopes   "
},
{
  "id": "svg-interactives-5",
  "level": "2",
  "url": "section-interactive-authored.html#svg-interactives-5",
  "type": "Checkpoint",
  "number": "13.13",
  "title": "Changing Secant Lines.",
  "body": "Changing Secant Lines  When discussing the derivative as a limit, we think of the point of tangency as being fixed (the green point in ) and the other point defining the secant line as changing (the red point in ). Switch it up! Fix a large value of (positive or negative) and then change the point of tangency (the green point). Discuss what you observe.  "
},
{
  "id": "section-interactive-authored-10-3",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-10-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "board "
},
{
  "id": "section-interactive-authored-10-6",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-10-6",
  "type": "Figure",
  "number": "13.14",
  "title": "",
  "body": " The Archimedian Spiral ,  Archimedian Spiral   "
},
{
  "id": "section-interactive-authored-10-9",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-10-9",
  "type": "Figure",
  "number": "13.15",
  "title": "",
  "body": " Infinity, from the JSXGraph Showcase   "
},
{
  "id": "figure-piecewise",
  "level": "2",
  "url": "section-interactive-authored.html#figure-piecewise",
  "type": "Figure",
  "number": "13.16",
  "title": "",
  "body": " Piecewise Function    "
},
{
  "id": "figure-quadratic-slope",
  "level": "2",
  "url": "section-interactive-authored.html#figure-quadratic-slope",
  "type": "Figure",
  "number": "13.17",
  "title": "",
  "body": " Finding the Tangent Line of a Quadratic Function    "
},
{
  "id": "figure-nondifferentiable-oscillation",
  "level": "2",
  "url": "section-interactive-authored.html#figure-nondifferentiable-oscillation",
  "type": "Figure",
  "number": "13.18",
  "title": "",
  "body": " Graph of a function that is continuous but not differentiable at because the slope of the secant line has no limit.   "
},
{
  "id": "section-interactive-authored-12-3",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-12-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interacts "
},
{
  "id": "figure-interactive-numerical-integral",
  "level": "2",
  "url": "section-interactive-authored.html#figure-interactive-numerical-integral",
  "type": "Figure",
  "number": "13.19",
  "title": "",
  "body": " Numerical integrals using the midpoint rule   "
},
{
  "id": "section-interactive-authored-13-6",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-6",
  "type": "Figure",
  "number": "13.20",
  "title": "",
  "body": " GeoGebra: modified material ID   "
},
{
  "id": "section-interactive-authored-13-8",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-8",
  "type": "Figure",
  "number": "13.21",
  "title": "",
  "body": " GeoGebra: .ggb file   "
},
{
  "id": "section-interactive-authored-13-10",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-10",
  "type": "Figure",
  "number": "13.22",
  "title": "",
  "body": " GeoGebra: modified from .ggb file   "
},
{
  "id": "section-interactive-authored-13-11",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-11",
  "type": "Figure",
  "number": "13.23",
  "title": "",
  "body": " GeoGebra: modified from .ggb file   "
},
{
  "id": "section-interactive-authored-13-13",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-13",
  "type": "Figure",
  "number": "13.24",
  "title": "",
  "body": " GeoGebra: a constructive proof that SAS congruence holds in Euclidean geometry (from Tevian Dray)   "
},
{
  "id": "section-interactive-authored-13-16",
  "level": "2",
  "url": "section-interactive-authored.html#section-interactive-authored-13-16",
  "type": "Figure",
  "number": "13.25",
  "title": "",
  "body": " GeoGebra: from scratch   "
},
{
  "id": "figure-circuitjs-attribute",
  "level": "2",
  "url": "section-interactive-authored.html#figure-circuitjs-attribute",
  "type": "Figure",
  "number": "13.26",
  "title": "",
  "body": " CircuitJS Example (source via an encoded attribute)   "
},
{
  "id": "figure-circuitjs",
  "level": "2",
  "url": "section-interactive-authored.html#figure-circuitjs",
  "type": "Figure",
  "number": "13.27",
  "title": "",
  "body": " CircuitJS Example (source authored directly)   "
},
{
  "id": "figure-sage-jupyter-iframe",
  "level": "2",
  "url": "section-interactive-authored.html#figure-sage-jupyter-iframe",
  "type": "Figure",
  "number": "13.28",
  "title": "",
  "body": " Sage+Jupyter iframe   "
},
{
  "id": "figure-threejs-catenoid-surface",
  "level": "2",
  "url": "section-interactive-authored.html#figure-threejs-catenoid-surface",
  "type": "Figure",
  "number": "13.29",
  "title": "",
  "body": " threejs catenoid surface, from -Category Cafe   "
},
{
  "id": "figure-threejs-saddle",
  "level": "2",
  "url": "section-interactive-authored.html#figure-threejs-saddle",
  "type": "Figure",
  "number": "13.30",
  "title": "",
  "body": " threejs saddle by Sage   "
},
{
  "id": "section-interactive-server",
  "level": "1",
  "url": "section-interactive-server.html",
  "type": "Section",
  "number": "14",
  "title": "Interactive Elements, Server",
  "body": " Interactive Elements, Server  interactive elements server  embedded interactive elements server    When outputting Web page versions, it is possible to embed a variety of dynamic interactive elements. In a latex \/PDF version, these will necessarily need to be replaced by some static substitute, such as a screenshot. See for the specifics of embedding instances of the Sage Cell Server, which is more elaborate, and not entirely similar.  Interactives in this section have code that lives on a server somewhere (in the cloud ). So maybe you uploaded an interactive demonstration, or maybe somebody else did. In this sense, these are easier to create or use. But pay attention, the code may come with restrictive licenses, even if you are the author originally. See for more interactives that can be free as in freedom or liberté . CalcPlot3D is the notable exception here.  (2018-06-22) Almost everything in this section is under active development and not stable yet. Feel free to experiment and make suggestions and requests. This page takes a while to completely load, so be patient.    GeoGebra  Geogebra server  Geogebra material  A Geogebra material is something you might use in a class. It could also be called an interactive demonstration. Go browsing at and find something appropriate for your project. Or make an account and create your own.  Once you find a material that looks instructive, it will be at a URL such as https:\/\/www.geogebra.org\/m\/KGn2d4Qd and you want to pick off the identifier on the end, in this case KGn2d4Qd . Then author <interactive geogebra=\"KGn2d4Qd\" \/> At this writing (2018-02-04) you will want to place this inside a figure , with a caption, as we do right now with material KGn2d4Qd .  The shape of the material will be fixed, so guess (or measure with an on-screen ruler), the aspect ratio and use that in the <interactive> element. If the width of the original material is anything other than 800 pixels, you should add material-width with the actual material width (units are pixels).   Right Triangle Paradox    There are some optional control elements that Geogebra provides, such as the presence of the toolbar and the reset button. These can be controlled by adding the following additional attributes to the interactive .  toolbar=\"yes\" : add the Geogebra toolbar above the material  algebra-input=\"yes\" : add an entry box below the material to add graphical objects using algebra formulas or Geogebra graphical commands  reset-icon=\"yes\" : enable the reset icon  shift-drag-zoom=\"yes\" : enable ability to drag and zoom the viewing context    Note that materials hosted at geogebra.org have a non-standard, non-commercial license you must agree to before you can download them as source code. Perhaps you must forfeit your copyright when you upload a material? We have not investigated this thoroughly.    Desmos Graphs  Desmos graphs  Desmos provides interactive graphing applications. The following example was created by Ann Cary and made available via the Share function of Desmos. You can make your own Desmos graph, choose the Share icon, and the Embed option, to get a URL such as https:\/\/www.desmos.com\/calculator\/ttox1bvxku You want to pick off the identifier on the end, in this case ttox1bvxku , then author <interactive desmos=\"ttox1bvxku\" width=\"60%\" aspect=\"2:3\" \/> as we have done here.  The static image employed in the latex version of this article was obtained by viewing the graph at the Desmos site ( , not the embedded version in the PreTeXt HTML version), and using the Share button to export a PNG image. In this case, we used a Medium Rectangle and Thick lines.   Graph of    Note that Desmos has extensive Terms of Service which include restrictions on commercial uses.    CalcPlot3D  CalcPlot3D  CalcPlot3D is a Javascript application for creating, visualizing, and understanding plots of 3D surfaces. So it would be an ideal companion to a book on multivariate calculus, but should be useful in other courses of study.  To use it, start at the online app version . Create a plot and adjust the image to a viewpoint and scale if you like. Then, click the menu\/hamburger icon in the upper-left and choose File . From here you can save a PNG image for the static version, but you also want to select Encode View in URL . Now your browser address bar is filled with a query string ( all the stuff after the question-mark) that has all the information necessary to reproduce your plot (and view). Copy everything after the first question-mark to the interactive\/code element. Be sure to replace any ampersands by &amp; (see the Author's Guide for more about certain characters in URL s). Examine the source for the examples below to see how they are authored. The Help Manual for CalcPlot3D is also available off the menu\/hamburger icon in the upper-left.  In grab the image with your mouse and rotate it in various directions. Then while the image has focus, press the 3 key (short for 3-D ), to get a 3D view, which will require some red-blue 3D glasses to fully appreciate. Press the key again to return to a regular view.  When using a version with controls (e.g. ), or the full application (e.g. ), specify an aspect ratio that is wider than it is tall. Start with aspect=\"3:2\" , and perhaps fine-tune from there.   Intersection of two planes (minimal embedding)     Probability wavefunction with contours (includes controls)     Plot of on (full application)      IFrames from Servers  The iFrame versions of interactives can point to a network location, presuming the endpoint is reasonably well-behaved. If you are using this sytematically, let us know and perhpas it should become a more dedicated PreTeXt construction. See for the local file version.  This example is from PhET Interactive Simulations .   Fourier: Making Waves iframe    Anything that suggests you can embed an interactive widget via an iFrame is fair game for this feature. This is a Google Map of the state of California, for use in a French language document, from Julien Giol. The necessary URL is obtained by using the Share feature, and then the Embed a map option has HTML with the URL in a src attribute.   California.     "
},
{
  "id": "subsection-geogebra-server-4",
  "level": "2",
  "url": "section-interactive-server.html#subsection-geogebra-server-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "material "
},
{
  "id": "subsection-geogebra-server-7",
  "level": "2",
  "url": "section-interactive-server.html#subsection-geogebra-server-7",
  "type": "Figure",
  "number": "14.1",
  "title": "",
  "body": " Right Triangle Paradox   "
},
{
  "id": "section-interactive-server-6-3",
  "level": "2",
  "url": "section-interactive-server.html#section-interactive-server-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Desmos "
},
{
  "id": "section-interactive-server-6-5",
  "level": "2",
  "url": "section-interactive-server.html#section-interactive-server-6-5",
  "type": "Figure",
  "number": "14.2",
  "title": "",
  "body": " Graph of   "
},
{
  "id": "figure-intersecting-planes",
  "level": "2",
  "url": "section-interactive-server.html#figure-intersecting-planes",
  "type": "Figure",
  "number": "14.3",
  "title": "",
  "body": " Intersection of two planes (minimal embedding)   "
},
{
  "id": "figure-wavefunction",
  "level": "2",
  "url": "section-interactive-server.html#figure-wavefunction",
  "type": "Figure",
  "number": "14.4",
  "title": "",
  "body": " Probability wavefunction with contours (includes controls)   "
},
{
  "id": "figure-calcplot3d",
  "level": "2",
  "url": "section-interactive-server.html#figure-calcplot3d",
  "type": "Figure",
  "number": "14.5",
  "title": "",
  "body": " Plot of on (full application)   "
},
{
  "id": "figure-phet-fourier",
  "level": "2",
  "url": "section-interactive-server.html#figure-phet-fourier",
  "type": "Figure",
  "number": "14.6",
  "title": "",
  "body": " Fourier: Making Waves iframe   "
},
{
  "id": "interactive-iframes-server-5",
  "level": "2",
  "url": "section-interactive-server.html#interactive-iframes-server-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "embed "
},
{
  "id": "map-california",
  "level": "2",
  "url": "section-interactive-server.html#map-california",
  "type": "Figure",
  "number": "14.7",
  "title": "",
  "body": " California.   "
},
{
  "id": "section-interactive-exercises",
  "level": "1",
  "url": "section-interactive-exercises.html",
  "type": "Section",
  "number": "15",
  "title": "Interactive Exercises",
  "body": " Interactive Exercises   Interactive components, just for testing, no commentary.    True\/False   A True\/False question.   True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?     Multiple-Choice   Multiple-Choice problem   Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?     Parsons Problem, Math Proof   With some MathJax.   Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .    Dorothy will not be much help with this proof.     Parsons Problem, Code   Programming Parsons problem, requiring indentation.   Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem requires the reader to provide the necessary indentation.]    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)      Matching   Events and dates.    Matching Problem, Dates matching US dates  Match each event in United States history with the year it happened.   Review Encyclopedia Brittania, 25 Decade-Defining Events in U.S. History url.    Monroe Doctrine  1823    Haymarket Riot  1886    Louisiana Purchase  1803    Battle of Gettysburg  1863      Clickable Area   Words, not code.   Clickable Areas, Regular Text  Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.   The future belongs to those who believe in the beauty of their  dreams .   The incorrect words are pronouns.     Old-Style Fillin-In   Do not use this as a model for new exercises. Just for backwards-compatibility.   Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 .   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.        A Reading Question  Short Answer  This should be built with a text-box, only on a capable server (Runestone). So it can be answered     Faux Subsection  We used <exercises> divisions above, and need a <subsection> to feed the schema.   "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "section-interactive-exercises.html#vector-space-dimension",
  "type": "Exercise",
  "number": "15.1.1",
  "title": "True\/False.",
  "body": "True\/False vector space  Every vector space has finite dimension.   The vector space of all polynomials with finite degree has a basis, , which is infinte.   , the vector space of polynomials with degree at most , has dimension by . [Cross-reference is just a demo, content is not relevant.] What happens if we relax the defintion and remove the parameter ?  "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "section-interactive-exercises.html#multiple-choice-not-randomized",
  "type": "Exercise",
  "number": "15.2.1",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": "Multiple-Choice, Not Randomized, One Answer stop signs  What color is a stop sign?     Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?   Maybe go out for a drive?  "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "section-interactive-exercises.html#number-theory-proof",
  "type": "Exercise",
  "number": "15.3.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": "Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: If is an even number, then .    Suppose is even.    Then is a prime number.  Then there exists an so that .  Then there exists an so that .    Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .    Dorothy will not be much help with this proof.  "
},
{
  "id": "prime-number-program-indent-yes",
  "level": "2",
  "url": "section-interactive-exercises.html#prime-number-program-indent-yes",
  "type": "Exercise",
  "number": "15.4.1",
  "title": "Parsons Problem, Programming.",
  "body": "Parsons Problem, Programming prime numbers Sieve of Eratosthenes  The Sieve of Eratosthenes computes prime numbers by starting with a finite list of the integers bigger than 1. The first member of the list is a prime and is saved\/recorded. Then all multiples of that prime (which not a prime, excepting the prime itself!) are removed from the list. Now the first number remaining in the list is the next prime number. And the process repeats.  The code blocks below can be rearranged to form one of the many possible programs to implement this algorithm to compute a list of all the primes less than . [Ed. this version of this problem requires the reader to provide the necessary indentation.]    n = 250     primes = []  candidates = list(range(2,n))    candidates = []  primes = list(range(2,n))     primes = candidates + [p]    while candidates:    p = candidates[0]  primes.append(p)    for nonprime in range(p, n, p):    if nonprime in candidates:  candidates.remove(nonprime)    print(primes)   "
},
{
  "id": "matching-dates",
  "level": "2",
  "url": "section-interactive-exercises.html#matching-dates",
  "type": "Exercise",
  "number": "15.5.1",
  "title": "Matching Problem, Dates.",
  "body": "Matching Problem, Dates matching US dates  Match each event in United States history with the year it happened.   Review Encyclopedia Brittania, 25 Decade-Defining Events in U.S. History url.    Monroe Doctrine  1823    Haymarket Riot  1886    Louisiana Purchase  1803    Battle of Gettysburg  1863   "
},
{
  "id": "clickable-text",
  "level": "2",
  "url": "section-interactive-exercises.html#clickable-text",
  "type": "Exercise",
  "number": "15.6.1",
  "title": "Clickable Areas, “Regular” Text.",
  "body": "Clickable Areas, Regular Text  Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.   The future belongs to those who believe in the beauty of their  dreams .   The incorrect words are pronouns.  "
},
{
  "id": "fillin-string-integer",
  "level": "2",
  "url": "section-interactive-exercises.html#fillin-string-integer",
  "type": "Exercise",
  "number": "15.7.1",
  "title": "Fill-In, String and Number Answers.",
  "body": "Fill-In, String and Number Answers  Complete the following line of a Python program so that it will declare an integer variable age with an initial value of 5 .   age =  ;      A variable of type int is appropriate for whole number ages.      Remember that Java uses just the first three letters of the word integer to define an integral type.        An integer variable may be initialized to a value.      Use 5 as the initial value of the variable.     "
},
{
  "id": "short-answer-question",
  "level": "2",
  "url": "section-interactive-exercises.html#short-answer-question",
  "type": "Reading Question",
  "number": "15.8.1",
  "title": "Short Answer.",
  "body": "Short Answer  This should be built with a text-box, only on a capable server (Runestone). So it can be answered  "
},
{
  "id": "section-interactive-code",
  "level": "1",
  "url": "section-interactive-code.html",
  "type": "Section",
  "number": "16",
  "title": "Interactive Coding",
  "body": " Interactive Coding   More interactive components, just for testing, no commentary.    ActiveCode   ActiveCode, Python program.    An interactive Python program, using Runestone   print(\"Hello, World!\")     An interactive Python program without codelens.   print(\"Hello, World!\")      CodeLens   A steppable Python program.    A Python program, stepable with CodeLens   print('Hello, World!')      Activity with An ActiveCode   Something to do with ActiveCode program.    Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.     YouTube  Video, observable on a Runestone server.    "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "section-interactive-code.html#program-activecode-python",
  "type": "Listing",
  "number": "16.1",
  "title": "",
  "body": " An interactive Python program, using Runestone   print(\"Hello, World!\")   "
},
{
  "id": "program-activecode-python-no-codelens",
  "level": "2",
  "url": "section-interactive-code.html#program-activecode-python-no-codelens",
  "type": "Listing",
  "number": "16.2",
  "title": "",
  "body": " An interactive Python program without codelens.   print(\"Hello, World!\")   "
},
{
  "id": "program-codelens-python",
  "level": "2",
  "url": "section-interactive-code.html#program-codelens-python",
  "type": "Listing",
  "number": "16.3",
  "title": "",
  "body": " A Python program, stepable with CodeLens   print('Hello, World!')   "
},
{
  "id": "coding-exercise-partial-two",
  "level": "2",
  "url": "section-interactive-code.html#coding-exercise-partial-two",
  "type": "Activity",
  "number": "16.1",
  "title": "Activity Coding Exercise.",
  "body": " Activity Coding Exercise   Similar to above, but now as a complete Python program inside an <activity> . This demonstrates the possibility to use any project-like block ( <project> , <activity> , <exploration> , <investigation> ), but not in the case when structured with <task> .    for i in range(10): print(i)   We're still not really sure.  "
},
{
  "id": "section-audio",
  "level": "1",
  "url": "section-audio.html",
  "type": "Section",
  "number": "17",
  "title": "Audio",
  "body": " Audio  2019-05-24: this is preliminary, and mostly based on the code for <video> so read the next section and mimic the style from there. But use an <audio> element and have the source attribute point to an OGG, MP3, or WAV file. Plus, an aspect attribute will be ignored.  We have not entirely decided how to handle the static version present in a PDF.  First in a <figure> , so it can be cross-referenced.   MP3 Piano Trill ( www.kozco.com\/tech\/soundtests.html )    Now, naked, between a couple of paragraphs, with specified asymmetric margins, and a computed width.   Now in a <sidebyside> with an Organ Finale WAV file on the left, and on the right, Bach in OGG format at a very low bit rate (32 kps). From .      "
},
{
  "id": "section-audio-5",
  "level": "2",
  "url": "section-audio.html#section-audio-5",
  "type": "Figure",
  "number": "17.1",
  "title": "",
  "body": " MP3 Piano Trill ( www.kozco.com\/tech\/soundtests.html )   "
},
{
  "id": "section-video",
  "level": "1",
  "url": "section-video.html",
  "type": "Section",
  "number": "18",
  "title": "Video",
  "body": " Video   First, a gratuitous reference to Exercise about the derivative of a cosine.  You can specify a video by a filename if you host it as part of your document, or a URL giving a location on the Internet. There are a few extra features for YouTube and Vimeo videos, which are near the bottom of this page, so look there first if that meets your needs.    Video Files  Embedded videos can make sense for a web version of your document. This is a video promoting the University of Puget Sound to potential new students, in WebM format. Support is limited to HTML5-capable browsers. The file format can be MP4, Ogg, or WebM, though this may vary depending upon the browser. Use a <video> element, within either a <figure> (numbered, captioned) or a <sidebyside> for more precise control. The source attribute in this first example does not include an extension, and so three possibilities above will be searched for preferentially (you need only provide the video in one format, but providing additional versions will increase the chances every browser will find a compatible format).   University of Puget Sound Promotional Video    You can replace the preview image of a video with one of your own making. HTML refers to this as the poster , presumably because it advertises the video. The image you make should be of the same quality as the video, and with the same aspect-ratio, and is presumably one of the frames of the video. So a screenshot is the likely avenue. (Maybe we will have advice on how to do this easily, or see Issue #853 .) link external, url  reference external, url On the <video> tag, include a preview attribute which is the name of an image file, including a relative path. (JPEG or PNG formats are best. JPEG may be smaller for video screenshots, while PNG is lossless and so may work better for diagrams.) The next video has a preview\/poster that is a fram part way into the introduction.   University of Puget Sound Promotional Video    If you find the posters provided automatically for a video to be distracting or objectionable, you can cover them up by requesting a generic poster with the attribute-value pair: preview = \"generic\" .   University of Puget Sound Promotional Video    You can use a very similar construction to point to a video hosted somewhere on the Internet, just use a complete URL for the <source> attribute. Note that if the URL has a query string (parameters following a question-mark), then any ampersands (&) will need to be escaped, so as to not confuse the XML processor ( use &amp ). Also, the question-mark character needs to not be URL -encoded ( %3F ), so presumably edit the URL to be the character. Here are several examples, the second one uses the start and stop attributes to limit the video to just the time between the 16-second and 30-second locations, and has asymmetric margins.    Big Buck Bunny from Video for Everybody Test Page     Big Buck Bunny, Controlled Start\/End, Asymmetric Margins     Big Buck Bunny, Ogg container, *.ogv extension     Big Buck Bunny, MP4 format     Big Buck Bunny, WebM format     Big Buck Bunny, Automatic best format (temporarily broken)     Videos are assumed to have a 16:9 aspect ratio (width:height). If this is not the case, then you must specify the aspect ratio with either a ratio (e.g. 4:3) or as a number expressing the fraction width\/height (e.g. 1.3333). Four decimal places should suffice for the latter. Note that you cannot change the aspect ratio, and you must supply the aspect ratio for any video that does not have the default ratio. This is a technical requirement that allows us to smoothly scale the videos on small devices (try this page on your mobile phone!).    YouTube  YouTube YouTube videos videos YouTube videos may be embedded with only knowledge of a video's ID or a playlist ID . A single video's YouTube ID is a string of eleven seemingly random characters that show up in the URL when you watch a video. For the Led Zeppelin performance below, the ID is hAzdgU_kpGo , which you might normally watch directly from the URL . As described just above, you need to specify a different aspect ratio if the video does not have a 16:9 aspect ratio.  Note: some of these videos may not play if viewed locally, and maybe not even if you start up a local web server (such as can be easily done with Python). So if you are testing new features, be careful about assuming videos from cloud services are not working properly.  If you have ever owned a drone, you sympathize with this guy. Way funnier than a cat video.   My first day with my drone  First Drone Flight (1:28)    If you are only interested in a piece of the action, you can limit the video with start and end attributes in seconds. You might make those times clear in the caption for readers getting the link out of a PDF. Some videos may not respect these parameters.   My first day with my drone (Splashdown)  First Drone Flight (Splashdown, 0:54 to 1:12)    This next video comes with a default poster from YouTube featuring Robert Plant. We've replaced it with a poster featuring Jimmy Page.   Kashmir (Live), Led Zeppelin  Kashmir (Live), Led Zeppelin. O2 Arena, London. December 10, 2007. (8:55)  Led Zeppelin video    And if you don't want to be reminded of Plant, Page, Bonham, or Jones, you can cover them up entirely.   Kashmir (Live), Led Zeppelin  Kashmir (Live), Led Zeppelin. O2 Arena, London. December 10, 2007. (8:55)  Led Zeppelin video    Videos were first designed mostly on the assumption that they are wrapped in a figure with a title (which is distinct from a caption ). But you can just place a video naked inbetween a couple of paragraphs. This is nice if you don't want the clutter of numbers, and\/or if you plan to exclude videos from some edition of your document.   We can pack two videos side-by-side, with a lot of horizontal control, using two panels in the sidebyside element. We have simply chosen here to not provide a caption (overall, or separately) as an illustration. The sizes are purposely a bit odd. See for much more on side-by-side panels. These videos come from the Topic and VEVO areas of YouTube (respectively) and both have start\/end times.        These next two videos are evenly spaced, one from YouTube, one from a source file hosted by the author. Now with separate captions, but identical margins (through very different choices of layout parameters than in the preceding pair of videos).     Drone Flight      UPS Promo     A YouTube playlist can be built in one of two ways. You may specify the youtube attribute to be a space-separated list of several video IDs. Alternatively, you may set the youtubeplaylist attribute to a YouTube playlist ID.    Individual IDs specified in an itemized playlist      YouTube playlist ID specified in a named playlist      We test three equally-wide YouTube videos in a <sidebyside> with a few variations.    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line     We test three equally-wide YouTube videos in a <sidebyside> with a few variations, and now contained in a <figure> .   Author-Hosted videos as Sub-Figures    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line      We test three equally-wide author-hosted videos in a <sidebyside> with a few variations.    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line     We test three equally-wide author-hosted videos in a <sidebyside> with a few variations, and now contained in a <figure> .   YouTube videos as Sub-Figures    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line        Vimeo  We support videos from Vimeo in much the same way as YouTube videos. Now the identifier is a long integer. For example, the video up next would normally be found at https:\/\/vimeo.com\/27246366 . But instead, you can embed the video with as little as <video vimeo=\"27246366\"\/> . As of 2019-05-18, we intend to support as many of the options described above as possible. Widths and heights (via the aspect ratio) will perform as expected. We have not investigated start and end times.   MOVE , by Rick Mereki , vimeo.com\/rickmereki    Now with an author-supplied poster.   MOVE , by Rick Mereki , vimeo.com\/rickmereki        Captions and Subtitles  Experimental support for captions and subtitles first. Look at the source, which mimics the actual HTML. The words of the titles and\/or subcaptions (there is a difference!) come from a file in Web Video Text Tracks ( WEBVVT ) format.   Big Buck Bunny with subtitles adapted from      This video is identical to the previous one, except it tests the use of a default <track> . The default attribute on <track> can be set to the value yes to make one set of captions the default (and only one!). Test is a bit lame, the two <track> use the same file, but just have different labels for the player's menu. Track named US English Two will show as in-use at start-up.       "
},
{
  "id": "section-video-3-3",
  "level": "2",
  "url": "section-video.html#section-video-3-3",
  "type": "Figure",
  "number": "18.1",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "section-video-3-4",
  "level": "2",
  "url": "section-video.html#section-video-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "poster "
},
{
  "id": "section-video-3-5",
  "level": "2",
  "url": "section-video.html#section-video-3-5",
  "type": "Figure",
  "number": "18.2",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "section-video-3-7",
  "level": "2",
  "url": "section-video.html#section-video-3-7",
  "type": "Figure",
  "number": "18.3",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "section-video-3-9",
  "level": "2",
  "url": "section-video.html#section-video-3-9",
  "type": "Figure",
  "number": "18.4",
  "title": "",
  "body": " Big Buck Bunny from Video for Everybody Test Page   "
},
{
  "id": "section-video-3-10",
  "level": "2",
  "url": "section-video.html#section-video-3-10",
  "type": "Figure",
  "number": "18.5",
  "title": "",
  "body": " Big Buck Bunny, Controlled Start\/End, Asymmetric Margins   "
},
{
  "id": "section-video-3-11",
  "level": "2",
  "url": "section-video.html#section-video-3-11",
  "type": "Figure",
  "number": "18.6",
  "title": "",
  "body": " Big Buck Bunny, Ogg container, *.ogv extension   "
},
{
  "id": "section-video-3-12",
  "level": "2",
  "url": "section-video.html#section-video-3-12",
  "type": "Figure",
  "number": "18.7",
  "title": "",
  "body": " Big Buck Bunny, MP4 format   "
},
{
  "id": "section-video-3-13",
  "level": "2",
  "url": "section-video.html#section-video-3-13",
  "type": "Figure",
  "number": "18.8",
  "title": "",
  "body": " Big Buck Bunny, WebM format   "
},
{
  "id": "section-video-3-14",
  "level": "2",
  "url": "section-video.html#section-video-3-14",
  "type": "Figure",
  "number": "18.9",
  "title": "",
  "body": " Big Buck Bunny, Automatic best format (temporarily broken)   "
},
{
  "id": "section-video-4-5",
  "level": "2",
  "url": "section-video.html#section-video-4-5",
  "type": "Figure",
  "number": "18.10",
  "title": "My first day with my drone",
  "body": " My first day with my drone  First Drone Flight (1:28)   "
},
{
  "id": "section-video-4-7",
  "level": "2",
  "url": "section-video.html#section-video-4-7",
  "type": "Figure",
  "number": "18.11",
  "title": "My first day with my drone (Splashdown)",
  "body": " My first day with my drone (Splashdown)  First Drone Flight (Splashdown, 0:54 to 1:12)   "
},
{
  "id": "section-video-4-9",
  "level": "2",
  "url": "section-video.html#section-video-4-9",
  "type": "Figure",
  "number": "18.12",
  "title": "Kashmir (Live), Led Zeppelin",
  "body": " Kashmir (Live), Led Zeppelin  Kashmir (Live), Led Zeppelin. O2 Arena, London. December 10, 2007. (8:55)  Led Zeppelin video   "
},
{
  "id": "section-video-4-11",
  "level": "2",
  "url": "section-video.html#section-video-4-11",
  "type": "Figure",
  "number": "18.13",
  "title": "Kashmir (Live), Led Zeppelin",
  "body": " Kashmir (Live), Led Zeppelin  Kashmir (Live), Led Zeppelin. O2 Arena, London. December 10, 2007. (8:55)  Led Zeppelin video   "
},
{
  "id": "section-video-4-17-1",
  "level": "2",
  "url": "section-video.html#section-video-4-17-1",
  "type": "Figure",
  "number": "18.14",
  "title": "",
  "body": " Drone Flight   "
},
{
  "id": "section-video-4-17-2",
  "level": "2",
  "url": "section-video.html#section-video-4-17-2",
  "type": "Figure",
  "number": "18.15",
  "title": "",
  "body": " UPS Promo   "
},
{
  "id": "section-video-4-19-1",
  "level": "2",
  "url": "section-video.html#section-video-4-19-1",
  "type": "Figure",
  "number": "18.16",
  "title": "",
  "body": " Individual IDs specified in an itemized playlist    "
},
{
  "id": "section-video-4-19-2",
  "level": "2",
  "url": "section-video.html#section-video-4-19-2",
  "type": "Figure",
  "number": "18.17",
  "title": "",
  "body": " YouTube playlist ID specified in a named playlist    "
},
{
  "id": "section-video-4-21-1",
  "level": "2",
  "url": "section-video.html#section-video-4-21-1",
  "type": "Figure",
  "number": "18.18",
  "title": "",
  "body": " Medium Length   "
},
{
  "id": "section-video-4-21-2",
  "level": "2",
  "url": "section-video.html#section-video-4-21-2",
  "type": "Figure",
  "number": "18.19",
  "title": "",
  "body": " Short   "
},
{
  "id": "section-video-4-21-3",
  "level": "2",
  "url": "section-video.html#section-video-4-21-3",
  "type": "Figure",
  "number": "18.20",
  "title": "",
  "body": " A Really Long Caption That Will Wrap onto a New Line   "
},
{
  "id": "section-video-4-23",
  "level": "2",
  "url": "section-video.html#section-video-4-23",
  "type": "Figure",
  "number": "18.21",
  "title": "",
  "body": " Author-Hosted videos as Sub-Figures    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line     "
},
{
  "id": "section-video-4-25-1",
  "level": "2",
  "url": "section-video.html#section-video-4-25-1",
  "type": "Figure",
  "number": "18.22",
  "title": "",
  "body": " Medium Length   "
},
{
  "id": "section-video-4-25-2",
  "level": "2",
  "url": "section-video.html#section-video-4-25-2",
  "type": "Figure",
  "number": "18.23",
  "title": "",
  "body": " Short   "
},
{
  "id": "section-video-4-25-3",
  "level": "2",
  "url": "section-video.html#section-video-4-25-3",
  "type": "Figure",
  "number": "18.24",
  "title": "",
  "body": " A Really Long Caption That Will Wrap onto a New Line   "
},
{
  "id": "section-video-4-27",
  "level": "2",
  "url": "section-video.html#section-video-4-27",
  "type": "Figure",
  "number": "18.25",
  "title": "",
  "body": " YouTube videos as Sub-Figures    Medium Length     Short     A Really Long Caption That Will Wrap onto a New Line     "
},
{
  "id": "section-video-5-3",
  "level": "2",
  "url": "section-video.html#section-video-5-3",
  "type": "Figure",
  "number": "18.26",
  "title": "",
  "body": " MOVE , by Rick Mereki , vimeo.com\/rickmereki   "
},
{
  "id": "section-video-5-5",
  "level": "2",
  "url": "section-video.html#section-video-5-5",
  "type": "Figure",
  "number": "18.27",
  "title": "",
  "body": " MOVE , by Rick Mereki , vimeo.com\/rickmereki     "
},
{
  "id": "section-video-6-3",
  "level": "2",
  "url": "section-video.html#section-video-6-3",
  "type": "Figure",
  "number": "18.28",
  "title": "",
  "body": " Big Buck Bunny with subtitles adapted from     "
},
{
  "id": "section-cross-referencing",
  "level": "1",
  "url": "section-cross-referencing.html",
  "type": "Section",
  "number": "19",
  "title": "Cross-Referencing",
  "body": " Cross-Referencing  Cross-references cross-reference are easy, since that is a key reason for having a highly structured document. Here is a useful feature if you elect to use it. Any <xref> will know what it points to, so you can let it provide the naming part of the cross-reference text. You can turn this on globally with the command-line parameter autoname autoname set to 'yes' . If you do that, you will see most of the names in this document doubled, since the names are written into the source already in most places outside of this section.  Moreover, the names themselves will change with the use of the one language dependent file. And another bonus is that with an autoname, you automatically get a non-breaking space between the name and the reference. The autoname switch makes no sense for provisional cross-references, since there is no information about what they point to.  Here is a reference that has no indication of its type in the source: . So by default you will just see a number that you can click on. If you use the text=\"type-global\" switch then you should see Theorem prepended. Note that if you changed the theorem to a lemma, then that change would be reflected here automatically when autonaming is in effect.  If you set the autonaming behavior globally, or accept the default behavior, there will still be instances where you want to override that choice. Simple: just say text=\"type-global\" or text=\"global\" as part of the xref . Each example below should look the same each time this article is processed, no matter how the global autoname is set.  No name ever:  Always named:   You might also wish to provide a prefix to a cross-reference and have it incorporated into the text of what you would click on in an electronic version. So if you make an xref with some content, then that content will prefix the cross-reference within the clickable\/pokeable text and be attached with a non-breaking space. This xref content totally overrides any prefix that might happen otherwise. So the name of an item (  corollary ) could be replaced, and if you make a cross-reference with custom text, that will be the clickable also. An example:  A grand result: Major Corollary  A grand result: a nice corollary   Suppose you want to reference two theorems, so you might want to say something like Theorems 4.6 and 5.2. With global autonaming on, you can override the first Theorem by providing the content Theorems on the first xref and text=\"global\" on the second xref . (With global autonaming off, you will also get what you want\/expect.) Here is the test, which should look correct no matter what the global switch is: Sections and . (But notice that it is up to you to be certain the types of these targets do not change without you changing the content of the first xref . The author-tools mode and careful choices of xml:id strings can help avoid this trap.)  If you set the value of text to title , then the title you assigned to the theorem will be used as the link for a cross-reference. Here is a the final example, which refers to a fundamental theorem by name .  Cross-references to exercises with hard-coded numbers should respect the supplied number. Exercise should reference problem 42a.  Here we form a list to test pointing at various structures. Each of the following should open a knowl in the HTML version, otherwise it will be a traditional hyperlink (if possible). Note that if a knowl opens, there will always be an in-context link which will take you to the actual location, should you have wished instead to just go there.  Footnotes: Fermat allusion at .  Citations: Judson's AATA with annotation at  Citations: Judson's AATA with autoname that should have zero effect  Citations: In a <references> division inside an appendix  Note: just the annotation of previous citation at  Examples: Mystery derivative at , or a question at .  Definition-like: A mathematical statement with no proof .  A numbered Note:  A link to a proposition element, while this document has globally renamed proposition s as Conundrum s, so this link should use the new name:  Theorems: Fundamental Theorem of Calculus, with proof at  Proof: of second version of FTC at  Figures: A plot with a derivative at .  A Figure within a side-by-side panel, with its own number:  A Table within a side-by-side panel, with a subnumber:  A Figure, containing a side-by-side with two sub-captioned images:  Display Mathematics: single, first with no name: . Then with an autoname: .  Display Mathematics: multi-row, first with no name: . Then with an autoname: . And two, with a plural form: Equations and .  You can cross-reference The Fundamental Theorem of Calculus via custom text of your choice.  Display mathematics: an equation with local tag, which should not be used so very far away: .  You can author a cross-reference to a displayed equation with no number, but it will not be very satisfying. You should get a warning if you try.  Exercises (divisional), a range, with plural form provided to override autonaming: Exercises .  Exercise (inline): with enclosed hint at  A group of two exercises, with introduction, conclusion:  Solution: An autonamed portion of an exercise:  Parts of a complicated exercise:   A subsidary part of an exercise:   knowl nested Three cross-references to individual exercises, but due to their location, they should have different type names in the cross-reference: in an <exercises> division, ; in the narrative, ; and in a <worksheet> , .  An item buried in nested ordered lists:  List item as knowls in HTML, including nested lists: ,  A titled list:  List item inside a named list, second color in rainbow list:  Second color in rainbow list, but now as a local reference:  An item in ordered list, but contained in an unordered list, hence without a number, so a cross-reference by number would be ambiguous. So we use a cross-reference which relies on custom text: No Number List Item  Several examples of hybrid cross-references to list items within a named list can be found in, and adjacent to, .  An assemblage, which never has a number. A cross-reference now requires content in the xref element, with text='custom' : text to xref an assemblage  A cross-reference to a list item in a description list, which has a title, but never a number: . Note that you need to include the attribute text=\"title\" even if that is obvious from the situation. This requirement may be relaxed in a future refactoring of the cross-reference system.  A very similar cross-reference to the previous one, but testing how final punctuation of titles is handled: .  A cross-reference to a paragraphs subdivision, which never has a number (so comments above about description list items and titles applies here too):  A case within the proof of :  A cross-reference to a description list item with a title containing math:  A cross-reference to an aside, by title necessarily, and with some formatting in the title:  A cross-reference to an objectives block, with an autoname. This demonstrates the number of the Objectives here, which is not shown in the original version since it is implicit:  A cross-reference to an individual objective. This is authored as a list item, but displayed as an objective (singular) via an autoname:  A cross-reference to the top-level element ( book ) will point to a summary page similar to a Table of Contents in HTML. For LaTeX output it will behave similarly, unless there is no Table of Contents, then it will go to the main title page: ToC or Title  Cross-references inside quotations previously lost track of their target, so this tests correcting that, not so much the cross-reference itself:  An activity with full details following:  A type-global cross-reference to a second-level task within a project: , the encompassing project : , and a local reference .  A subcaptioned named list:  This opens a knowl for an example . It has a solution, which is orginally presented as a hidden knowl. But since this version is a duplicate, the knowl for the solution is a file version, not an embedded version, and hence free from duplicating any unique identifaction like an HTML id. So we test its styling and function here:  A cross-reference to a poem, where we need to use a title for the link text, since a poem is not numbered:  A cross-reference to a <references> division in a subsection, which should not be numbered where born, but which has the number of its parent division in a cross-reference: . And a cross-reference to a <references> division, which is the main bibliography in the back matter, and so is not numbered where born, nor in a cross-reference (which we must accomplish via it's title): .  A cross-reference to a <solutions> division in a subsection, which should not be numbered where born, but which has the number of its parent division in a cross-reference: . And a cross-reference to a <solutions> division, which should appear as an appendix both where born and as a cross-reference: .  A cross-reference to an <exercises> division in a subsection, which is the only such division in that subsection and therefore should not be numbered where born, but which has the number of its parent division in a cross-reference: . In contrast we cross-reference an <exercises> division which is one of two inside a section, and therefore is numbered, when born and when cross-referenced, in continuity with the preceding subsections: . Also an <exercise> within an <exercises> which should have a cross-reference employing the number of the containing (unstructured) <section> : which is in which is in the (unstructured) .  A custom cross-reference: Custom   Cross-reference to <instructions> of an <interactive> :  A hyperlink to a <subexercises> via its required title (no number is assigned):     Cross-references to structural elements of the document will always take you there directly, since even in the HTML version these parts never get realized as knowls. You will find such links sprinkled through this document, but here is an autonamed link to a subsubsection: .  Cross-references can be built into display mathematics, but they can only point to one item ( a comma-delimited list of targets is not supported). Examples below should test the distinction in HTML output between a link that opens a knowl and a link that jumps to a larger chunk of content. Notice that display mathematics is entirely latex syntax, no matter which output format you create. So if you do not use the autoname facility, you need to wrap non-math text in \\text{} and perhaps use a tilde ( ~ ) as a non-breaking space (examine the source of this article).  bug in-context broken  Variations on the above include multiple xml:id as the value of a single ref attribute on an xref , in the form of a comma-separated list. In this case, only the numbers are links\/knowls and the autonaming attribute is based on the type of the first ref . Wrapping with brackets (citations) or parentheses (equations) is also controlled by the type of the first ref . And the detail attribute for a bibliographic reference is silently ignored. So you can do silly things like have a reference to a theorem within a list of equation numbers and there will be no error message. Handle with care. Spaces after commas in the list will migrate to the output as spaces, so if you don't have any, you won't get any.    Four theorems, with spaces, autonamed:  Two equations, no spaces, autonamed:  Two bibliographic items, no autoname:    If you have a long list of items (such as homework exercises, not in an exercisegroup , or perhaps several chapters), you can get a cross-reference that prints as a range by using xref with two attributes first and last , which may contain a single xml:id each. As with multiple references, first will control autonaming and other features.  A range of exercises, autonamed (this range appears out-of-order since the two exercise are numbered under two different schemes):  A range of equations:  A system of equations, given as range from first to last:  A range of sections, hand-named to be plural: Sections  A range of bibliographic items:    The url url element may be used to link to a data file, either externally, or internally, if you want to make such an object available to a reader. reference external A good example use case is a spreadsheet that might be part of an exercise, or contain data relevant to some discussion. First let us suppose the data resides somewhere on the Internet, then just use the complete address. Here is one from Microsoft: Sample Excel Spreadsheet .  For a link like the previous one, you might want to provide advice appropriate for your audience about using a context menu to download a file, or how to configure helper\/viewer applications.    You can also provide a file yourself, but now it is your obligation to distribute the file with your document ( HTML , PDF , ) and provide a relative link. This creates some complications, such as making sure an electronic PDF has the associated file in the same place relative to the PDF file. Of course, if you make a print PDF, this becomes impossible. Here is a test example anyway, which is highly likely to be broken in a PDF (including at the PreTeXt project site) unless you build this example on your own computer, locally. Here is a template from the Apache OpenOffice project, provided via the Public Documentation License (PDL): Running Statistics Template .  The next four paragraphs are each a single <dataurl> element. Explore the source and the output from different conversions. Strictly for testing as of 2022-11-04.  Foo Sample Excel Spreadsheet Bar  Foo Runners Template Bar  Foo Sample Excel Spreadsheet Bar  Foo Runners Template Bar  Testing of output positioning for xref's that are inside containers:   Self-referential Xref In a table    A  B  C  D     B  C  D      Xref Inside MathJAX      Now we have two xref's to that same target that has a runestone component. Only the first one clicked should try to render the runestone.  "
},
{
  "id": "self-referential-tabular-xref",
  "level": "2",
  "url": "section-cross-referencing.html#self-referential-tabular-xref",
  "type": "Table",
  "number": "19.1",
  "title": "Self-referential Xref In a table",
  "body": " Self-referential Xref In a table    A  B  C  D     B  C  D    "
},
{
  "id": "section-cross-referencing-26",
  "level": "2",
  "url": "section-cross-referencing.html#section-cross-referencing-26",
  "type": "Figure",
  "number": "19.2",
  "title": "",
  "body": " Xref Inside MathJAX     "
},
{
  "id": "section-internationalization",
  "level": "1",
  "url": "section-internationalization.html",
  "type": "Section",
  "number": "20",
  "title": "Internationalization",
  "body": " Internationalization  internationalization  Supporting a multitude of possible characters, across many languages and across many output formats can be a challenge. One of our goals is to make this much easier for authors. Fortunately, the Unicode standard has led to improvements from the 7-bit ASCII standard of old.   Unicode Characters for HTML Output  First, we discuss HTML output. If you include Unicode Unicode characters in your PreTeXt source, they should survive just fine en route to a web browser or e-reader. Here are the caveats for HTML output:  So that you can continue to get the best results with print and PDF output, use available empty elements for obscure characters, even if targeting HTML output, before resorting to a Unicode character. For example, use <copyright\/> for the copyright symbol in text before resorting to the Unicode character U+00A9 . It is a bit more work, but you will get better results with other conversions, even if you initially are only fascinated by HTML .  How you actually enter Unicode characters into your source file is dependent on your editor and operating system, and is therefore outside the scope of our documentation. You can cut-and-paste characters and text from the source of our examples for initial testing and experimentation.  Always, always identify your source as having Unicode characters by including the incantation <?xml version=\"1.0\" encoding=\"UTF-8\" ?> as the first line of your source file. (You may be able to accurately cut-and-paste this version here. But if the copy has non-standard characters in it, go back to the top of this source file for a copy.)  Alan Wood’s Unicode Resources has a plethora of samples of various groups of Unicode characters. If you, or your readers, are missing characters in a web browser, this is a good place to start testing the local setup.     Characters in latex , PDF, print  The situation for latex is a bit more complicated, since tex pre-dates Unicode's widespread adoption.  This sample article is intended to work well, out-of-the-box, for authors just starting with PreTeXt . So we only include here examples that we know are likely to convert to PDF without any errors. For more extensive examples and experiments, we provide the sample document examples\/fonts\/fonts-and-characters.xml , so be aware of that example as you look to see what is possible.  Similarly, you should be able to process this sample article successfully with various latex engines. We test regularly with pdflatex and xelatex and provide online sample PDF output of this document processed by pdflatex . In principle, you should be able to use latex (to produce a DVI), and possibly other (unsupported) engines, such as lualatex .  Once you get beyond the Latin alphabet, with accents common in Western Europe and the Western Hemisphere, you will almost assuredly need to restrict your attention to producing PDF output with the xelatex engine. This is discussed and tested in examples\/fonts\/fonts-and-characters.xml .    Basic Latin, U+0000 U+007F  Unicode uses multiple 8-bit bytes to represent characters, and these are typically expressed in hexadecimal (base 16) notation. Using just a single byte, we can get 256 values, and the first 128 (hex 00 to 7F ) are the usual Latin characters with some values used as control codes. These 95 characters are the most basic, and will all render using pdflatex or xelatex with no special setup (and will render easily in HTML). U+0000 to U+001F are control codes and not used here. U+007F is also a control code and so is excluded, while U+0020 is a space, so appears invisible in the table. In the source we have authored each character by its escaped version using its Unicode number (in hexadecimal). So, for example, capital-B is authored as &#x0042; .      Basic Latin, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~       Latin-1 Supplement, U+0080 U+00FF  Now we are interested in the next 128 possible bytes, (hex 80 to FF ). The first 32 are again control codes and U+00A0 is a non-breaking space, so is invisible, while U+00AD is a soft hyphen (which we have not implemented and so is excluded). We have taken care to see that the remainder will render using pdflatex or xelatex with no special setup (and HTML). In the source we have authored each character by its escaped version using its Unicode number (in hexadecimal). So, for example, a copyright symbol is authored as &#x00A9; .      Latin-1 Supplement, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_   ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ      Monospace, Basic Latin and Latin-1 Supplement, U+0000 U+00FF  A monospace font is critical for samples of keyboard input and to distinguish exact technical input from running commentary. We list here all of the reasonable characters from the first 256 Unicode code points. (We skip the same 65 control characters from above, and the soft hyphen.) These should all render fine in HTML and when processed with xelatex , however our focus with this sample article for PDF output is the capabilities when processed with pdflatex . First, characters from U+0000 U+007F .     Basic Latin, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~     Note that the single and double quotes are upright and dumb, not curly and smart: ' \" ' \" ' \" . And a backtick is a backtick: ` ` ` . The zero is distinguished from the capital oh : 0 O 0 O 0 O . And the numeral one is slightly different from the lower-case ell : 1 l 1 l 1 l . The hyphen should be short and not expanded into some other kind of dash: - - - . These characters should all cut\/paste out of a PDF into a text editor with no conversion to other characters.  Now the remaining characters from U+0080 U+00FF . The program tag is implemented in latex via the listing package and these characters require ad-hoc replacements for processing by pdflatex . (You can see the replacements in the preamble of the latex source for this document.) The replacement mechanism provided by the listing package will cause the characters below to produce a latex compilation error if processed by pdflatex and in a table cell in certain situations (which we have avoided in the table below). The only workaround in this case is to switch to xelatex .      Latin-1 Supplement, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_  ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ    The pre tag is implemented in latex with the fancyvrb package. You can compare results here with the table above, lines here are rows above.      ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯  ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿  À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï  Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß  à á â ã ä å æ ç è é ê ë ì í î ï  ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ   The console tag is also implemented with fancyvrb , with adjustments for the input lines. It will not look like it, but these are 8 such inputs, with similar results to above, but now bolded.   ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯  ° ± ² ³ ´ µ ¶ · ¸ ¹ º » ¼ ½ ¾ ¿  À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï  Ð Ñ Ò Ó Ô Õ Ö × Ø Ù Ú Û Ü Ý Þ ß  à á â ã ä å æ ç è é ê ë ì í î ï  ð ñ ò ó ô õ ö ÷ ø ù ú û ü ý þ ÿ   We take care to render the U+0080 U+00FF characters in Sage cells. This would allow some flexibility in comments and strings employed. The following is just a test of these characters in the input and output of a sage element. This is not functional code.    The table below has a single column, and each cell of the table has a string of 10 characters inside a c element. It is meant to test if the font is monospace in this situation.   Alignment Test   0123456789  9876543210  iiiiiiiiii  mmmmmmmmmm    Again, more examples and more thorough explanations can be found in the sample: examples\/fonts\/fonts-and-characters.xml . Be aware that the nature of the more advanced sample is that it will likely produce many errors when processed with pdflatex . Adding -interaction batchmode or -interaction nonstopmode to the pdflatex command-line will sometimes be less painless than acknowledging each error. The more advanced sample will perform well when processed with xelatex .  "
},
{
  "id": "section-internationalization-6-3",
  "level": "2",
  "url": "section-internationalization.html#section-internationalization-6-3",
  "type": "Table",
  "number": "20.1",
  "title": "Basic Latin, Regular",
  "body": " Basic Latin, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~    "
},
{
  "id": "section-internationalization-7-3",
  "level": "2",
  "url": "section-internationalization.html#section-internationalization-7-3",
  "type": "Table",
  "number": "20.2",
  "title": "Latin-1 Supplement, Regular",
  "body": " Latin-1 Supplement, Regular    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_   ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ   "
},
{
  "id": "section-internationalization-8-3",
  "level": "2",
  "url": "section-internationalization.html#section-internationalization-8-3",
  "type": "Table",
  "number": "20.3",
  "title": "Basic Latin, Monospace",
  "body": " Basic Latin, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  002_  ! \" # $ % & '  ( ) * + , - . \/  003_ 0 1 2 3 4 5 6 7  8 9 : ; < = > ?  004_ @ A B C D E F G  H I J K L M N O  005_ P Q R S T U V W  X Y Z [ \\ ] ^ _  006_ ` a b c d e f g  h i j k l m n o  007_ p q r s t u v w  x y z { | } ~    "
},
{
  "id": "section-internationalization-8-6",
  "level": "2",
  "url": "section-internationalization.html#section-internationalization-8-6",
  "type": "Table",
  "number": "20.4",
  "title": "Latin-1 Supplement, Monospace",
  "body": " Latin-1 Supplement, Monospace    0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  00A_  ¡ ¢ £ ¤ ¥ ¦ §  ¨ © ª « ¬  ® ¯  00B_ ° ± ² ³ ´ µ ¶ ·  ¸ ¹ º » ¼ ½ ¾ ¿  00C_ À Á Â Ã Ä Å Æ Ç  È É Ê Ë Ì Í Î Ï  00D_ Ð Ñ Ò Ó Ô Õ Ö ×  Ø Ù Ú Û Ü Ý Þ ß  00E_ à á â ã ä å æ ç  è é ê ë ì í î ï  00F_ ð ñ ò ó ô õ ö ÷  ø ù ú û ü ý þ ÿ   "
},
{
  "id": "section-internationalization-10",
  "level": "2",
  "url": "section-internationalization.html#section-internationalization-10",
  "type": "Table",
  "number": "20.5",
  "title": "Alignment Test",
  "body": " Alignment Test   0123456789  9876543210  iiiiiiiiii  mmmmmmmmmm   "
},
{
  "id": "section-pre-formatted",
  "level": "1",
  "url": "section-pre-formatted.html",
  "type": "Section",
  "number": "21",
  "title": "Pre-Formatted Text",
  "body": " Pre-Formatted Text  In Sage, if you wanted to build a matrix matrix , then you would use the matrix() constructor. Here is the matrix of second partials of , as you would enter it in Sage. Notice that SR is the ring of symbolic expressions, Symbolic Ring .  var('x', 'y') J = matrix(SR, [ [6*x + 16*y^3, 48*x*y^2], [48*x*y^2, 48*x^2*y + 12*y^2] ])  That accomplished, Sage will easily and naturally provide a latex representation of the matrix with the command latex(J) .  \\left(\\begin{array}{rr} 16 \\, y^{3} + 6 \\, x & -48 \\, x y^{2} \\\\ 48 \\, x y^{2} & 48 \\, x^{2} y + 12 \\, y^{2} \\end{array}\\right)  The pre element surrounds text that should be preserved verbatim. It is like a special kind of paragraph, and can be used almost everywhere that a paragraph can be used. The realization of preformatted text should be robust enough that it can be cut from documents and pasted without any substitutions of fancier Unicode characters for generic ASCII characters. Try the minus sign on the above to see if it does not become a dash, or the single quotes on the Sage variables.  For Sage input code, the first non-whitespace character sets the left margin, since legitimate Python code has no subsequent lines outdented. For pre-formatted code, the line with the least whitespace leading the line will determine the left margin. If preserving indentation is important, do not mix spaces and tabs. For syntax highlighting of text representing computer programs, or parts of them, see Section . Examine the source of the following example to help understand this paragraph.  A normal line An indented line An outdented line  Snippets should also be robust for cut\/paste operations. For example, you should not get curly  smart quote marks in verbatim text: this should have \"dumb\" quote marks . Here are a few characters that should migrate through latex to a PDF unmolested: '\"----\"'  If you write a very long snippet of inline code (i.e. within a <c> element) it can impinge on the right margin, since very long words will not hypenate, unless you have a dash\/hypen. Such as when you use words like pneumonoultramicroscopicsilicovolcanoconiosis, parastratiosphecomyia stratiosphecomyioides, floccinaucinihilipilification, or subdermatoglyphic. For output in LaTeX we get line-breaking, and perhaps word-spacing, but we do not get hyphenation and the font is fixed-width. So not always perfect. Consider other options like <cd> or <pre> below.  An intermediate type of verbatim text can be accomplished with the <cd> tag, short for code display. It allows for larger chunks of verbatim text to show up in the middle of a paragraph, but with some vertical space above and below, and centered between the margins. It can be authored as a single line or if you wish to have multiple lines  there is the <cline> tag  meant to model the line tag  and short for \"code line\"  and you may even  use a single cline  if you like to have your source closely model the visual look of the output.  With the showspaces attribute of <cd> set to all there will be a visual indication of every space character, which is nice if indentation is critical. For example,  there is the <cline> tag  meant to model the line tag  and short for \"code line\"  and as single line authored as a single line that is not structured with <cline> elements.  The <pre> tag is meant for use outside of paragraphs, but is otherwise very similar. The source may also be structured as a sequence of <cline> as in the next example, recycling content from above.   If you write a very long snippet of inline code (i.e. within  a <c> element) it can impinge on the right margin, since  very long words will not hypenate, unless you have a dash\/hypen.  Such as when you use words like  pneumonoultramicroscopicsilicovolcanoconiosis,  parastratiosphecomyia stratiosphecomyioides,  floccinaucinihilipilification, or subdermatoglyphic. For output  in LaTeX we get line-breaking, and perhaps word-spacing, but we  do not get hyphenation and the font is fixed-width. So not always  perfect. Consider other options like <cd> or <pre> below.   We use a Unicode right arrow (Unicode Character 'RIGHTWARDS ARROW', U+2192) to sometimes indicate the truncation of long lines in a text file. It is available in our usual monospace font for latex \/PDF, but we include a use here in order to make certain that is always the case. Here: → .  "
},
{
  "id": "section-programs",
  "level": "1",
  "url": "section-programs.html",
  "type": "Section",
  "number": "22",
  "title": "Program Listings (with <code class=\"code-inline tex2jax_ignore\">code<\/code> in the title)",
  "body": " Program Listings (with code in the title)  Sage cells can be used for Python examples, but Sage uses a mild amount of pre-parsing, so that might not be a wise decision, especially in instructional settings. We might implement Skulpt or Brython (in-browser Python) or the Python language argument to the Sage Cell Server. To see examples of authoring Sage cells, have a look at Section .  In the meantime, program listings, listing program listing especially with syntax highlighting, is useful all by itself. The R language might not be a bad stand-in for pseudo-code, as it supports assignment with a left arrow and has fairly generic procedural syntax for control structures and data structures. Or maybe Pascal would be a good choice? Here is an example of R. Note in the source that the entire block of code is wrapped in a CDATA section due to the four left angle brackets. We do not recommend this technique for isolated problem characters, but it is a life-saver for situations like the XSLT code just following.      n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   And some self-referential XSL:   <xsl:template match=\"biblio\" mode=\"number\"> <xsl:apply-templates select=\".\" mode=\"structural-number\" \/> <xsl:text>.<\/xsl:text> <xsl:number from=\"references\" level=\"any\" count=\"biblio\" \/> <\/xsl:template>   Matlab is a commercial language for mathematics, while Octave in an open source version. The language values of matlab and octave are somewhat interchangeable. Following is a very slighlty edited version of an example from 50 Basic Examples for Matlab .    a = [0:0.5:5]; % A Matlab comment here b = 2*a.^2 + 3*a -5; c = 1.2*a.^2+4*a-3; subplot(1,2,1) plot(a,b,'-or','MarkerFaceColor','g','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve ','Location','NorthWest') subplot(1,2,2) plot(a,c,'--ok','MarkerFaceColor','c','LineWidth',2) xlabel('X'); ylabel('Y'); legend('Curve 2','Location','NorthWest')   You can write made-up pseudo-code, but you might explain to a reader what your symbols all mean. This routine takes the marix to reduced row-echelon form. Note that with no language specified, there is no special formatting or use of color. Note in the source the use of escaped characters for the three less-than symbols.   input m, n and A r := 0 for j := 1 to n i := r+1 while i <= m and A[i,j] == 0 i := i+1 if i < m+1 r := r+1 swap rows i and r of A (row op 1) scale A[r,j] to a leading 1 (row op 2) for k := 1 to m, k <> r make A[k,j] zero (row op 3, employing row r) output r and A   Look in the pretext-common.xsl file to see the strings to use to identify languages. Always all-lowercase, no symbols, no punctuation.  Note that the above examples all have slightly different widths (theser are very evident in print with the frames). As 2-D atomic objects, to place them in the narrative requires the layout features of a sidebyside element. Then width and\/or margin attributes will influence the width of the panel.  A program may also be nested inside a listing , which behaves similar to a figure . You can provide a caption , and the listing will be numbered along with tables and figures. This then makes it possible to cross-reference the listing, such as . It also removes the requirement of wrapping the program in a sidebyside . For technical reasons, the three examples above will not split across a page break in PDF output, but the placement inside a listing will allow splits, as you should see in at least one example following.   C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    A <program> may include line numbers.   A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    A <program> may also include highlighted lines.   A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }    If you are discussing algorithms in the abstract (or even concretely), you can set them off like a theorem, with a number, a title and a target for cross-references. Sometimes you claim an algorithm produces something in particular, or has certain properties, such as a theoretical run time, so a proof may be included. See the discussion just preceding about (limited) options for pseudo-code.   Sieve of Eratosthenes   On input of a positive integer n this algorithm will compute all the prime numbers up to, and including, n . It was named for Eratosthenes of Cyrene ( 276 BC 195\/194 BC) by Nicomachus ( 60 120 CE) in Introduction to Arithmetic . ( Wikipedia , 2015)  Input: n  Form the list of all integers from 2 to n  Set p = 2  While p < sqrt(n)  If present, remove from the list multiples 2p, 3p, ...  If p is now the last element of the list, stop  Otherwise, set p to the element of the list immediately after current p    Output: the remaining elements of the list     Any element removed is a non-trivial product of two integers and hence composite. So no prime is is ever removed from the list.  Each composite number is a multiple of some prime, and since no prime is ever removed, each composite will be removed. Hence the removed elements are precisely the set of composite numbers in the list and thus the remainder are precisely the primes on the list.    If you are writing about system-level software, you may need to write numbers in hexadecimal or binary. Here we use a numbered, displayed equation (mathematics) and latex macros such as \\texttt for a monospace text font, and \\; for spacing\/grouping the bits of the binary number. If you use these constructions repeatedly, then some latex macros might be useful. It might also be beneficial for us to add some PreTeXt markup for such numbers used in a paragraph send us a feature request.    This is a spurious theorem to break up the run of consecutive listing so we might test the effect.    And this is a spurious paragraph to prove that the theorem beforehand, and the proof following, are distinct from one another.   This is a proof that is authored detached. It is not associated with the theorem above in a way other than simply following it.   A specialized version of a program listing is an interactive command\/response session at a command-line, where differing fonts are used to differentiate the system prompt, the user's commands, and the system's reaction. A console session may be used by itself inside a sidebyside , or it can be wrapped in a listing to get a number and a caption. As elsewhere, you will need to escape ampersands and angle brackets (such as if you have a command using redirection), using &amp; , &lt; , and &gt; in your source.   Console Session: int and float   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     Here is the plain version, some layout control. We simply place a small margin on the left (at 4% width).   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    If your console input exceeds more than one line, you can author it across several lines and your choice of line breaks will be reflected in the rendering. You can decide to indent lines after the first one for clarity, if desired. You can also decide if your audience needs line-continuation characters or not.   Console Session: int and float (multi-line input)   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     Notice in the HTML version of the above example that when you highlight all, or a portion, of the listing for a cut-and-paste that the prompts are not included.  The next listing is just absurdity, to check various characters from latex that are otherwise employed by the code supporting consoles, and some Latin-1 characters. We test each in a prompt, input, and output. We use (* and *) as sequences used to escape embedded latex commands, so we test those also.   Console Session: problematic latex characters   A backslash \\ here  A backslash \\ here  A begin group { here  A begin group { here  An end group } here  An end group } here  An open escape sequence (* here  An open escape sequence (* here  An end escape sequence *) here  An end escape sequence *) here  Some quotation marks ` ' \" here  Some quotation marks ` ' \" here  The rest & % $ # _ ~ ^ of LaTeX  The rest & % $ # _ ~ ^ of LaTeX  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß    We conclude this section with a longer example of a program listing, an assembly language program from Bob Plantz, included to test a listing breaking across pages in PDF output.   A longer program listing   @ structPass2.s @ Allocates two structs and assigns a value to each field @ in each struct, then displays the values. @ Bob Plantz - 6 July 2016 @ Constants for assembler .include \"theTag_struct.s\" @ theTag struct defs. .equ y,-28 @ y struct .equ x,-16 @ x struct .equ locals,28 @ space for the structs @ Constant program data .section .rodata .align 2 displayX: .asciz \"x fields:\\n\" displayY: .asciz \"y fields:\\n\" dispAChar: .asciz \" aChar = \" dispAnInt: .asciz \" anInt = \" dispOtherChar: .asciz \" anotherChar = \" @ The program .text .align 2 .global main .type main, %function main: stmfd sp!, {r4, fp, lr} @ save caller's info add fp, sp, #8 @ our frame pointer sub sp, sp, #locals @ for the structs @ fill the x struct add r0, fp, #x @ address of x struct mov r1, #'1 mov r2, #456 mov r3, #'2 bl loadStruct @ fill the y struct add r0, fp, #y @ address of y struct mov r1, #'a mov r2, #123 mov r3, #'b bl loadStruct @ display x struct add r4, fp, #x @ address of x struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine @ display y struct add r4, fp, #y @ address of y struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine mov r0, #0 @ return 0; sub sp, fp, #8 @ restore sp ldmfd sp!, {r4, fp, pc} @ restore and return .align 2 @ addresses of messages displayXaddr: .word displayX displayYaddr: .word displayY dispACharAddr: .word dispAChar dispAnIntAddr: .word dispAnInt dispOtherCharAddr: .word dispOtherChar    "
},
{
  "id": "listing-c-hello",
  "level": "2",
  "url": "section-programs.html#listing-c-hello",
  "type": "Listing",
  "number": "22.1",
  "title": "",
  "body": " C Version of Hello, World!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "program-line-numbers",
  "level": "2",
  "url": "section-programs.html#program-line-numbers",
  "type": "Listing",
  "number": "22.2",
  "title": "",
  "body": " A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "program-highlight-lines",
  "level": "2",
  "url": "section-programs.html#program-highlight-lines",
  "type": "Listing",
  "number": "22.3",
  "title": "",
  "body": " A static Java program with line numbers   import javax.swing.JFrame; \/\/Importing class JFrame import javax.swing.JLabel; \/\/Importing class JLabel public class HelloWorld { public static void main(String[] args) { JFrame frame = new JFrame(); \/\/Creating frame frame.setTitle(\"Hi!\"); \/\/Setting title frame frame.add(new JLabel(\"Hello, world!\"));\/\/Adding text to frame frame.pack(); \/\/Setting size to smallest frame.setLocationRelativeTo(null); \/\/Centering frame frame.setVisible(true); \/\/Showing frame } }   "
},
{
  "id": "algorithm-sieve-eratosthenes",
  "level": "2",
  "url": "section-programs.html#algorithm-sieve-eratosthenes",
  "type": "Algorithm",
  "number": "22.4",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes   On input of a positive integer n this algorithm will compute all the prime numbers up to, and including, n . It was named for Eratosthenes of Cyrene ( 276 BC 195\/194 BC) by Nicomachus ( 60 120 CE) in Introduction to Arithmetic . ( Wikipedia , 2015)  Input: n  Form the list of all integers from 2 to n  Set p = 2  While p < sqrt(n)  If present, remove from the list multiples 2p, 3p, ...  If p is now the last element of the list, stop  Otherwise, set p to the element of the list immediately after current p    Output: the remaining elements of the list     Any element removed is a non-trivial product of two integers and hence composite. So no prime is is ever removed from the list.  Each composite number is a multiple of some prime, and since no prime is ever removed, each composite will be removed. Hence the removed elements are precisely the set of composite numbers in the list and thus the remainder are precisely the primes on the list.   "
},
{
  "id": "theorem-detached",
  "level": "2",
  "url": "section-programs.html#theorem-detached",
  "type": "Theorem",
  "number": "22.5",
  "title": "",
  "body": "  This is a spurious theorem to break up the run of consecutive listing so we might test the effect.   "
},
{
  "id": "section-programs-24",
  "level": "2",
  "url": "section-programs.html#section-programs-24",
  "type": "Proof",
  "number": "22.1",
  "title": "",
  "body": " This is a proof that is authored detached. It is not associated with the theorem above in a way other than simply following it.  "
},
{
  "id": "console-raspberry-pi",
  "level": "2",
  "url": "section-programs.html#console-raspberry-pi",
  "type": "Listing",
  "number": "22.6",
  "title": "",
  "body": " Console Session: int and float   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "console-raspberry-pi-multi",
  "level": "2",
  "url": "section-programs.html#console-raspberry-pi-multi",
  "type": "Listing",
  "number": "22.7",
  "title": "",
  "body": " Console Session: int and float (multi-line input)   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "section-programs-33",
  "level": "2",
  "url": "section-programs.html#section-programs-33",
  "type": "Listing",
  "number": "22.8",
  "title": "",
  "body": " Console Session: problematic latex characters   A backslash \\ here  A backslash \\ here  A begin group { here  A begin group { here  An end group } here  An end group } here  An open escape sequence (* here  An open escape sequence (* here  An end escape sequence *) here  An end escape sequence *) here  Some quotation marks ` ' \" here  Some quotation marks ` ' \" here  The rest & % $ # _ ~ ^ of LaTeX  The rest & % $ # _ ~ ^ of LaTeX  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß  Latin-1: ÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß   "
},
{
  "id": "section-programs-35",
  "level": "2",
  "url": "section-programs.html#section-programs-35",
  "type": "Listing",
  "number": "22.9",
  "title": "",
  "body": " A longer program listing   @ structPass2.s @ Allocates two structs and assigns a value to each field @ in each struct, then displays the values. @ Bob Plantz - 6 July 2016 @ Constants for assembler .include \"theTag_struct.s\" @ theTag struct defs. .equ y,-28 @ y struct .equ x,-16 @ x struct .equ locals,28 @ space for the structs @ Constant program data .section .rodata .align 2 displayX: .asciz \"x fields:\\n\" displayY: .asciz \"y fields:\\n\" dispAChar: .asciz \" aChar = \" dispAnInt: .asciz \" anInt = \" dispOtherChar: .asciz \" anotherChar = \" @ The program .text .align 2 .global main .type main, %function main: stmfd sp!, {r4, fp, lr} @ save caller's info add fp, sp, #8 @ our frame pointer sub sp, sp, #locals @ for the structs @ fill the x struct add r0, fp, #x @ address of x struct mov r1, #'1 mov r2, #456 mov r3, #'2 bl loadStruct @ fill the y struct add r0, fp, #y @ address of y struct mov r1, #'a mov r2, #123 mov r3, #'b bl loadStruct @ display x struct add r4, fp, #x @ address of x struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine @ display y struct add r4, fp, #y @ address of y struct ldr r0, displayXaddr bl writeStr ldr r0, dispACharAddr @ display aChar bl writeStr ldrb r0, [r4, #aChar] bl putChar bl newLine ldr r0, dispAnIntAddr @ display anInt bl writeStr ldr r0, [r4, #anInt] bl putDecInt bl newLine ldr r0, dispOtherCharAddr @ display anotherChar bl writeStr ldrb r0, [r4, #anotherChar] bl putChar bl newLine mov r0, #0 @ return 0; sub sp, fp, #8 @ restore sp ldmfd sp!, {r4, fp, pc} @ restore and return .align 2 @ addresses of messages displayXaddr: .word displayX displayYaddr: .word displayY dispACharAddr: .word dispAChar dispAnIntAddr: .word dispAnInt dispOtherCharAddr: .word dispOtherChar   "
},
{
  "id": "section-units-measure",
  "level": "1",
  "url": "section-units-measure.html",
  "type": "Section",
  "number": "23",
  "title": "Units of Measure",
  "body": " Units of Measure  Units of measure can be given xml treatment too with the quantity element. In latex , the siunitx siunitx package package siunitx units package is loaded to achive unit handling. Since that package only offers SI units, some other common units will be added by PreTeXt in the preamble. In HTML, the capabilities of siunitx are simulated, weakly. Note that at present, you should not attempt to use the quantity element within a math environment.  The value of gravitational constant is 9.8 . Force is measured in , also known as one . A quantity with rather ridiculous units is 23 . One is the same as . You can have a unitless quantity, like 42 , which may help with consistency between such numbers and units in the latex output. Some non-SI units are available, such as the absurd . The latex command \\pi is recognized within mag in conversions to HTML, which is consistent with the behavior with a conversion to latex , for example there are  2\\pi   in a full circle. This is a similar quantity with multiple occurences of \\pi to test a particular template used for HTML output. It is not meant to make any sense:  21\\pi45\\pi234\\pi890   .  For a full list of the allowed units and prefixes, see pretext-units.xsl . If you have a need for more units, they need to be added to pretext-units.xsl in the section that deals with units which are not part of siunitx by default. Note that the mag element should come first, followed by the unit element, followed by the per element.  "
},
{
  "id": "section-side-by-side",
  "level": "1",
  "url": "section-side-by-side.html",
  "type": "Section",
  "number": "24",
  "title": "Side-By-Side Panels",
  "body": " Side-By-Side Panels   Introduction  The flow of a page is almost universally top-to-bottom. But at times you would like to go across a page, perhaps to compare items (identical content in two different languages), or to make good use of a page real estate by grouping several small items together ( images). So the <sidebyside> tag is strictly a layout device, though it does convey some meaning by grouping certain objects together. A variety of different objects can be put side-by-side using the sidebyside element. Specifically, figure , image , tabular , p , ol , ul , dl , pre , poem , and more. The individual components of a <sidebyside> are generically called panels panels .  As a layout device, the <sidebyside> does not allow a <caption> , is never numbered, and therefore cannot be cross-referenced. You may cross-reference whatever element holds the <sidebyside> , and many of the panels may be cross-referenced individually.  As a first example, we have two single paragraphs, laid out with different widths, and slight margins on each side. The widths have been chosen experimentally to get roughly identical heights for the two paragraphs of varying length.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem diam, convallis in nulla sed, accumsan fermentum urna. Pellentesque aliquet leo elit, ut consequat nunc dapibus ac. Sed lobortis leo tincidunt, vulputate nunc at, ultricies leo. Vivamus purus diam, tristique laoreet purus eget, mollis gravida sapien. Nunc vulputate nisl ac mauris hendrerit cursus. Sed vel molestie velit. Suspendisse sem sem, elementum at vehicula id, volutpat ac mi. Nullam ullamcorper fringilla purus in accumsan. Mauris at nunc accumsan orci dictum vulputate id id augue. Suspendisse at dignissim elit, non euismod nunc. Aliquam faucibus magna ac molestie semper. Aliquam hendrerit sem sit amet metus congue tempor. Donec laoreet laoreet metus, id interdum purus mattis vulputate. Proin condimentum vitae erat varius mollis. Donec venenatis libero sed turpis pretium tempor.  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra. Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.     Figures with Numbers Side-By-Side  Figures, or other captioned items such as tables or listings, can be placed side-by-side using the sidebyside element. The figures will be captioned and numbered as if they were part of the vertical flow of the document. For example, see and  However, if the <sidebyside> is placed inside another <figure> , then the outer figure gets an overall caption and a regular number, while the captions of the interior items will be labelled as (a), (b), (c), etc; for example, see the subfigures in . You can also cross-reference the subfigures individually, for example: .  The sidebyside tag can have an attribute widths that specifies a percentage width of the page for each panel of the layout. There are automatic margins by default, and any remaining width is divided evenly to space out the panels. When the margins attribute is given as auto , or in the default case, the margins provided each equal half of the inter-panel space.  With no attributes on the sidebyside , each panel is the same width and there is no inter-panel space and no margin. For a sidebyside with a single panel, with its width specified, the panel will be centered.   Side-by-Side, with figures as children, automatic margin      a white square outlined in blue covered by a black X           Side-by-Side, with figures as children, margin set to zero    width=50%     width=25%        Widths calculated automatically, all defaults                   Interior figure     Regular numbering     Regular numbering       Images  We can use the sidebyside element to put images image next to each other. These will illustrate a text, but with no captions or numbers, cannot be cross-referenced. This next example has 10% margins, and the panels have widths 25% and 40% , leaving 15% computed as the one inter-panel space.      Now we fine-tune with different widths (which add up to 100%). The five images have been given different vertical alignments, top middle bottom top middle via the valigns attribute.         If you want an overall caption to a group of images, but no sub-captions on your images, that is also straightforward. This example has no attributes specified. The overall <figure> may be cross-referenced, as   Two equally-spaced (identical) images         Common Side-By-Side Constructions  We have now seen at least one example of each of the four most common constructions involving sidebyside . Working from the exterior inward, we can go figure , sidebyside , figure , X , where X is some atomic (unnumbered) item we might use elsewhere in a PreTeXt document, the inner figure may be repeated with different objects X , and the figure s have captions. Each figure is independently optional, leading to the four combinations in this table. Note this applies to any captioned item used inside the sidebyside , but a figure is the most flexible.   sidebyside and figure interactions    Outer Figure Inner Figure Effect    Absent Absent Layout only, no numbers nor captions    Absent Present Numbers and captions on figure(s)    Present Absent Number and overall caption    Present Present Number and overall caption, sub-numbers and captions on figure(s)       Vertical Alignment  Vertical alignment can be specified using the valign attribute which admits a space-separated list of top , middle , and bottom ; the default is top .          Middle     Top     Middle     The singular version of the attribute, valign , can provide the same alignment to each panel, here we use five different widths, but all with vertical alignment of middle .           Text Next to Text and Images  Text can be put next to other blocks of text using the stack element, which can contain multiple paragraphs using the p element (see ). If only one paragraph is required, simply use the p element on its own.    here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text    here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here   here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here   Similarly, text can be put next to images.   here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text cross reference: and math:    You can place text next to numbered figures, as shown below in .   here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text here is some text; cross reference: and math:   Text next to a figure       Image Formats, Side-by-Sides  Most of our demonstrations here use our square blue cross test image, which is provided as a PNG image. You may specify images by any of the methods described in the section on graphics, . The complete graph below is specified with no file extension, on the assumption that an SVG version exists for HTML output, and a PDF version exists for latex output. The second is a JPEG image that we use elsewhere for a YouTube video, but recycle here as an image provided in that format. By default, they are aligned at their tops.      Here are two TikZ images, authored side-by-side. The first has had its geometric portions of the original scaled down to 75%, with the effect of increasing the text, relatively, so the application in a side-by-side panel with 25% width has legible text. We caption only the second panel, which has no text adjustments. From TeXample.net .              tex Work Flow              Images by Stefan Kottwitz  Venn Diagram  Work Flow      Tables Side-By-Side  Tables table can also be put side-by-side, as demonstrated below in ; naturally, subtables can be referenced as in .   Side-by-Side, with tables as children    width=50%        1111  2222    aaaa  bbbb    AAAA  BBBB      width=25%        1111  2222    aaaa  bbbb    AAAA  BBBB        Widths can be calculated automatically    Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB        If you put two table elements side-by-side without an enclosing <figure> , then they will use regular numbering; see Tables .           1111  2222    aaaa  bbbb    AAAA  BBBB             1111  2222    aaaa  bbbb    AAAA  BBBB             1111  2222    aaaa  bbbb    AAAA  BBBB        Tables Next to Figures  Tables and figures can go next to each other, as demonstrated in and , plus within an overall captioned figure, .    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table      Figure and Table, with overall caption, hence sub-captioned    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table        Tables Next to Text  Tables can go next to blocks of text using the <stack> element (see ).    Table next to text        1111  2222    aaaa  bbbb    AAAA  BBBB      here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here    here is some text here is some text here is some text here is some text here  here is some text here is some text here is some text here is some text here      Tabular Next to Each Other  Four tabular elements inside a single <sidebyside> will result in no captions at all.         1111  2222    aaaa  bbbb    AAAA  BBBB    CCCC  DDDD          1111  2222    aaaa  bbbb    AAAA  BBBB          1111  2222    aaaa  bbbb    AAAA  BBBB          1111  2222    aaaa  bbbb    AAAA  BBBB       Lists in Side-by-Sides  A regular list normally belongs in a p but it can be placed unadorned into a panel of a side-by-side, as demonstrated below in . You can also put named lists into a panel, and then the title, introduction, conclusion, and caption will behave as expected, along with a number that might be used in a cross-reference ( ), or perhaps we might cross-reference by title, .   Two named lists    Sea Life   Dr. Seuss again.    One fish  Two fish Not fishes  Red fish  Blue fish     Color Shades  colors shades   Blue in many shades  Light  Navy  Royal   Red  Maroon  Pink  Shocking     This ends our example.      These same two lists can individually be the panels of a <sidebyside> , where here vertical alignment on the bottom attempts to align the titles, which are placed below for panels of a <sidebyside> .    Sea Life   Dr. Seuss again.    One fish No more fishes  Two fish  Red fish  Blue fish     Color Shades  colors shades   Blue  Light  Navy  Royal   Red a really nice color  Maroon  Pink  Shocking     This ends our example.     We also need to test a sidebyside in a list. The widths are now relative to the space given over to an indented item. Here we nest and nest and nest and nest to get a big, obvious indentation, and then include an image at 100% width and no margin. In your mind's eye, or with a ruler, check that the image spans all the way over to the right margin.  This is  a very  wide   rectangle          Stacking: Back to Vertical Flow  You might wish to mix disparate items within a panel, returning to a vertical flow within a panel. For example, you might want a diagram to the left and some paragraphs of commentary to the right. Or perhaps a photograph on one side and a list of bullet points to the other side. A <stack> is a container that can only be used to collect several items into a single panel of a <sidebyside> . You cannot point to it, but you can point to its contents as usual. Contents may be anything you could otherwise put into a sidebyside panel that does not have a <caption> or a <title> . In particular, these panels cannot be sub-numbered since the panel cannot be made into a <figure> .  Similar items can also be stacked, of course. Most importantly, a normal panel will accept a single paragraph. If you want several paragraphs, simply collect them in a stack .    A simple sentence inside a single <p> as the first item in a stack.      A less simple sentence that will wrap inside the panel to make the right panel taller and allow us to experiment with sliding the left panel contents up and down, here it is placed in the middle .    We have an image to the left, as a regular panel (not a stack). In the right panel we stack a list of properties, followed by a descriptive paragraph. We middle-align the stack at the bottom , just as a demonstration (it would likely look better with top alignment).      Blue  Square  Geometric   The blue-ness of the border contrasts with the stark emptieness of the white interior, evoking images of blue skies and vast sandy deserts. The harsh black cross draws the viewer's attention to the exact center.    In latex an image or a tabular can be used within a paragraph. Here we test a mixture of the three items to make sure they are properly separated in a conversion to latex .    Paragraph one.   Paragraph two.        1111  2222    aaaa  bbbb    AAAA  BBBB       We imagine a <sidebyside> using a <stack> to enable constructions like a table of data in one panel, and maybe a plot with some text next to it.  In the toy example next, the list of data is rigid, so we have set the first panel width to 40% , a value obtained experimentally to just contain the list. This allow us to set the second panel to a width of 58% , and we use no margins. If you try to balance the heights of the two panels, this can become a bit of a zero-sum game. A wider second column means the text occupies fewer lines, but the wider image also creates a taller image, consuming more vertical space.   Experimental results collected in a figure           0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900     This set of values and this plot have nothing to do with each other. You'll recognize that they've been liberated from earlier in this work.  Step back and simply examine how the pieces all fit together within a <figure> .      Bully Pulpit  Remember that <sidebyside> has attributes that strongly influence layout. That is intentional. But to support a variety of output formats, it does not allow overly-precise control, and they be viewed as providing hints to an implementer of a conversion. So for example, do not expect <sidebyside> to function like a latex  tabular or an HTML  table .  In particular, elements of two consecutive <stack> will not line up, unless perhaps you construct them identically. Consider a <sbsgroup> for something closer to putting items into rows.     Other Panels  Other elements may be placed within a sidebyside element. Pure lists first.    Footnotes: Fermat allusion at .  Examples: Mystery derivative at .  Definition-like: A mathematical statement with no proof .  Figures: An early plot, Figure .    Footnotes: Fermat allusion at .  Examples: Mystery derivative at .  Definition-like: A mathematical statement with no proof .  Figures: An early plot, Figure .    You can place aligned equations in paragraphs within a sidebyside element.   here is some text, and here is an equation that contains alignment.   here is some text, and here is an equation that contains alignment.  here is some text, and here is an equation that contains alignment.    Pre-formatted text may be included by using the pre element. This content is horizontally-rigid, so as the author, you need to be sure to provide enough width for the panel to contain the content. It is easy to see the boundary of the panels when rendered in HTML since there is a background that fills the panel.    Hello, World! in Pascal and C++    program HelloWorld;  begin  WriteLn('Hello, world!');  end.   #include int main() { std::cout << \"Hello, world!\"; return 0; }     A graph defined by data (from Keller and Trotter's Applied Combinatorics )   graph1.txt 9 6 2 1 5 1 7 6 8 9 1 4 3 5 7 1 3 5 9 7 9       Poems as Side-By-Side Panels  Poems poem may be panels of a side-by-side layout. Here we place some commentary alongside. See for general information about poetry.    Fire and Ice  Fire and Ice, Frost  Robert Frost   Some say the world will end in fire,  Some say in ice.  From what I've tasted of desire  I hold with those who favor fire.  But if it had to perish twice,  I think I know enough of hate  To say that for destruction ice  Is also great  And would suffice.     You might have several things to say about a poem and you could use a sequence of paragraphs immediately adjacent.  This is a second paragraph of commentary.    Poems are not horizontally-rigid, but they are not perfectly horizontally-flexible either. The left copy of this next poem is in a panel roughly 2\/3 the width of the page and fits there. The right copy has the first five lines and is in space about half the previous width, and you can see the lines being wrapped with obvious indentation. So you can constrain the width of a poem if you do not mind the additional indentation. (Recognize that this example is a bit extreme.)    Sonnet to Liberty  Sonnet to Liberty, Wilde  Oscar Wilde   Not that I love thy children, whose dull eyes  See nothing save their own unlovely woe,  Whose minds know nothing, nothing care to know,  But that the roar of thy Democracies,  Thy reigns of Terror, thy great Anarchies,  Mirror my wildest passions like the sea,  And give my rage a brother! Liberty!  For this sake only do thy dissonant cries  Delight my discreet soul, else might all kings  By bloody knout or treacherous cannonades  Rob nations of their rights inviolate  And I remain unmoved-and yet, and yet,  These Christs that die upon the barricades,  God knows it I am with them, in some things.     Sonnet to Liberty  Oscar Wilde   Not that I love thy children, whose dull eyes  See nothing save their own unlovely woe,  Whose minds know nothing, nothing care to know,  But that the roar of thy Democracies,  Thy reigns of Terror, thy great Anarchies,        Side-By-Side Groups  A side-by-side group,  <sbsgroup> , is still in development. (Notably, subcaptions do not behave as expected.) It is a sequence of sidebyside , which may conceivably use the same margins, widths and vertical alignments for each horizontal run of panels. Attributes on the sbsgroup are global to the group's enclosed sidebyside , and will be used by each contained sidebyside . If attributes are present on an individual sidebyside , they override the global values. The next two examples demonstrate some of this behavior, in a limited way.   Overall SBS Group    One.  Two.  Three.    Four.  Five.  Six.     A long poem, when placed into a sidebyside will not fit onto a physical page and will not break across pages. With a sbsgroup you can put each stanza (say) into its own sidebyside and place something (commentary) next to it. We include the title with the first stanza and the author with the last stanza. This device can also be useful to attach commentary to specific stanzas.     The Stolen Child  Stolen Child, The, Yeats   Where dips the rocky highland  Of Sleuth Wood in the lake,  There lies a leafy island  Where flapping herons wake  The drowsy water-rats;  There we've hid our faery vats,  Full of berries  And of reddest stolen cherries.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza One.        Where the wave of moonlight glosses  The dim grey sands with light,  Far off by furthest Rosses  We foot it all the night,  Weaving olden dances,  Mingling hands and mingling glances  Till the moon has taken flight;  To and fro we leap  And chase the frothy bubbles,  While the world is full of troubles  And is anxious in its sleep.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza Two.        Where the wandering water gushes  From the hills above Glen-Car,  In pools among the rushes  That scarce could bathe a star,  We seek for slumbering trout  And whispering in their ears  Give them unquiet dreams;  Leaning softly out  From ferns that drop their tears  Over the young streams.  Come away, O human child!  To the waters and the wild  With a faery, hand in hand,  For the world's more full of weeping than you  can understand.     Some commentary on Stanza Three.       William Butler Yeats   Away with us he's going,  The solemn-eyed:  He'll hear no more the lowing  Of the calves on the warm hillside  Or the kettle on the hob  Sing peace into his breast,  Or see the brown mice bob  Round and round the oatmeal-chest.  For he comes, the human child,  To the waters and the wild  With a faery, hand in hand,  From a world more full of weeping than he  can understand.     Some commentary on Stanza Four.      The main rationale for sbsgroup is to layout a grid of items, and by placing the layout parameters on the sbsgroup element, the items can line up across sidebyside and subcaptioning can run across the whole group. So, for example, if you have images to compare by placing in a grid, then making them all the same size, or of the same aspect ratio, can help with the overall consistency.  This example has three sidebyside , each with four figure containing an identical image . Since the images are identical and the width is set to 20% they should all line up nicely with little effort. Since the default for margins is automatic, the remaining 20% of the overall width will be used for three inter-panel spaces of 5% and two margins of 2.5% each. Note the numbering of these as independent figures. We have left the captions empty for reasons of space, but you could add more information. Note that in print, a page break is allowed between any two of the sidebyside and cannot be suppressed.                                                          We recycle the prior sbsgroup but now put it in its own overall figure. That will allow a caption for the whole group, and will cause the twelve figures to be subcaptioned. Except the subcaptioning is not implemented. Soon.   Twelve images, arranged in a grid                                                           One more test. We override the spacing and vertical alignments of the middle sidebyside . Note that it is easy to make a panel so skinny that even the smallest possible caption does not fit in the width.                                                            Testing a Side-By-Side First  A <sidebyside> that appears first within some other container can wreak havoc in latex output. Below we have this situation twice, once in an <activity> , then in an <example> , then in a <paragraphs> .     Here is text block 1  Here is text block 2        Here is text block 1  Here is text block 2     And a <sbsgroup> in similar circumstances.      Here is text block 1  Here is text block 2    Here is text block 3  Here is text block 4       First Child of a Paragraphs     A  B    C  D                  Testing Styling of Related Elements  This subsection has non-side-by-side structures, to aid with the effects of styling decisions across the range of possibilities. First a figure with a caption holding a scaled image and a cross-reference for knowl testing: .   A traditional figure     "
},
{
  "id": "section-side-by-side-2-2",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "panels "
},
{
  "id": "fig-sidebyside-global",
  "level": "2",
  "url": "section-side-by-side.html#fig-sidebyside-global",
  "type": "Figure",
  "number": "24.1",
  "title": "",
  "body": " Side-by-Side, with figures as children, automatic margin      a white square outlined in blue covered by a black X         "
},
{
  "id": "section-side-by-side-3-7",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-3-7",
  "type": "Figure",
  "number": "24.2",
  "title": "",
  "body": " Side-by-Side, with figures as children, margin set to zero    width=50%     width=25%      "
},
{
  "id": "section-side-by-side-3-8",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-3-8",
  "type": "Figure",
  "number": "24.3",
  "title": "",
  "body": " Widths calculated automatically, all defaults                "
},
{
  "id": "regular-figure",
  "level": "2",
  "url": "section-side-by-side.html#regular-figure",
  "type": "Figure",
  "number": "24.4",
  "title": "",
  "body": " Interior figure   "
},
{
  "id": "another-regular-figure",
  "level": "2",
  "url": "section-side-by-side.html#another-regular-figure",
  "type": "Figure",
  "number": "24.5",
  "title": "",
  "body": " Regular numbering   "
},
{
  "id": "yet-another-regular-figure",
  "level": "2",
  "url": "section-side-by-side.html#yet-another-regular-figure",
  "type": "Figure",
  "number": "24.6",
  "title": "",
  "body": " Regular numbering   "
},
{
  "id": "figure-double-image",
  "level": "2",
  "url": "section-side-by-side.html#figure-double-image",
  "type": "Figure",
  "number": "24.7",
  "title": "",
  "body": " Two equally-spaced (identical) images      "
},
{
  "id": "section-side-by-side-5-3",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-5-3",
  "type": "Table",
  "number": "24.8",
  "title": "<code class=\"code-inline tex2jax_ignore\">sidebyside<\/code> and <code class=\"code-inline tex2jax_ignore\">figure<\/code> interactions",
  "body": " sidebyside and figure interactions    Outer Figure Inner Figure Effect    Absent Absent Layout only, no numbers nor captions    Absent Present Numbers and captions on figure(s)    Present Absent Number and overall caption    Present Present Number and overall caption, sub-numbers and captions on figure(s)    "
},
{
  "id": "section-side-by-side-6-3-1",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-6-3-1",
  "type": "Figure",
  "number": "24.9",
  "title": "",
  "body": " Middle   "
},
{
  "id": "section-side-by-side-6-3-2",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-6-3-2",
  "type": "Figure",
  "number": "24.10",
  "title": "",
  "body": " Top   "
},
{
  "id": "section-side-by-side-6-3-3",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-6-3-3",
  "type": "Figure",
  "number": "24.11",
  "title": "",
  "body": " Middle   "
},
{
  "id": "text-next-to-figure",
  "level": "2",
  "url": "section-side-by-side.html#text-next-to-figure",
  "type": "Figure",
  "number": "24.12",
  "title": "",
  "body": " Text next to a figure   "
},
{
  "id": "section-side-by-side-8-5-2",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-8-5-2",
  "type": "Figure",
  "number": "24.13",
  "title": "",
  "body": " tex Work Flow            "
},
{
  "id": "table-sidebyside-global",
  "level": "2",
  "url": "section-side-by-side.html#table-sidebyside-global",
  "type": "Figure",
  "number": "24.14",
  "title": "",
  "body": " Side-by-Side, with tables as children    width=50%        1111  2222    aaaa  bbbb    AAAA  BBBB      width=25%        1111  2222    aaaa  bbbb    AAAA  BBBB      "
},
{
  "id": "section-side-by-side-9-4",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-9-4",
  "type": "Figure",
  "number": "24.15",
  "title": "",
  "body": " Widths can be calculated automatically    Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      Table with automatic widths        1111  2222    aaaa  bbbb    AAAA  BBBB      "
},
{
  "id": "table-regular-fig1",
  "level": "2",
  "url": "section-side-by-side.html#table-regular-fig1",
  "type": "Table",
  "number": "24.16",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-regular-fig2",
  "level": "2",
  "url": "section-side-by-side.html#table-regular-fig2",
  "type": "Table",
  "number": "24.17",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-regular-fig3",
  "level": "2",
  "url": "section-side-by-side.html#table-regular-fig3",
  "type": "Table",
  "number": "24.18",
  "title": "",
  "body": "        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "table-next-figure",
  "level": "2",
  "url": "section-side-by-side.html#table-next-figure",
  "type": "Table",
  "number": "24.19",
  "title": "Table next to a Figure",
  "body": " Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "figure-next-table",
  "level": "2",
  "url": "section-side-by-side.html#figure-next-table",
  "type": "Figure",
  "number": "24.20",
  "title": "",
  "body": " Figure next to a Table   "
},
{
  "id": "figure-table-captioned",
  "level": "2",
  "url": "section-side-by-side.html#figure-table-captioned",
  "type": "Figure",
  "number": "24.21",
  "title": "",
  "body": " Figure and Table, with overall caption, hence sub-captioned    Table next to a Figure        1111  2222    aaaa  bbbb    AAAA  BBBB       Figure next to a Table     "
},
{
  "id": "section-side-by-side-11-3-1",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-11-3-1",
  "type": "Table",
  "number": "24.22",
  "title": "Table next to text",
  "body": " Table next to text        1111  2222    aaaa  bbbb    AAAA  BBBB    "
},
{
  "id": "section-side-by-side-13-3",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-13-3",
  "type": "Figure",
  "number": "24.23",
  "title": "",
  "body": " Two named lists    Sea Life   Dr. Seuss again.    One fish  Two fish Not fishes  Red fish  Blue fish     Color Shades  colors shades   Blue in many shades  Light  Navy  Royal   Red  Maroon  Pink  Shocking     This ends our example.     "
},
{
  "id": "section-side-by-side-13-5-1",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-13-5-1",
  "type": "List",
  "number": "24.24",
  "title": "Sea Life",
  "body": " Sea Life   Dr. Seuss again.    One fish No more fishes  Two fish  Red fish  Blue fish   "
},
{
  "id": "color-list-as-panel-in-sbs",
  "level": "2",
  "url": "section-side-by-side.html#color-list-as-panel-in-sbs",
  "type": "List",
  "number": "24.25",
  "title": "Color Shades",
  "body": " Color Shades  colors shades   Blue  Light  Navy  Royal   Red a really nice color  Maroon  Pink  Shocking     This ends our example.   "
},
{
  "id": "stacking-side-by-side-11",
  "level": "2",
  "url": "section-side-by-side.html#stacking-side-by-side-11",
  "type": "Figure",
  "number": "24.26",
  "title": "",
  "body": " Experimental results collected in a figure           0 0.00 0.0000 0.5000   1 0.20 0.1000 0.4800   2 0.40 0.1960 0.4560   3 0.60 0.2872 0.4295   4 0.80 0.3731 0.4027   5 1.00 0.4536 0.3783   6 1.20 0.5293 0.3591   7 1.40 0.6011 0.3480   8 1.60 0.6707 0.3474   9 1.80 0.7402 0.3603   10 2.00 0.8123 0.3900     This set of values and this plot have nothing to do with each other. You'll recognize that they've been liberated from earlier in this work.  Step back and simply examine how the pieces all fit together within a <figure> .    "
},
{
  "id": "subsection-sbs-other-panels-7",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbs-other-panels-7",
  "type": "Figure",
  "number": "24.27",
  "title": "",
  "body": " Hello, World! in Pascal and C++    program HelloWorld;  begin  WriteLn('Hello, world!');  end.   #include int main() { std::cout << \"Hello, world!\"; return 0; }   "
},
{
  "id": "subsection-sbs-other-panels-8",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbs-other-panels-8",
  "type": "Figure",
  "number": "24.28",
  "title": "",
  "body": " A graph defined by data (from Keller and Trotter's Applied Combinatorics )   graph1.txt 9 6 2 1 5 1 7 6 8 9 1 4 3 5 7 1 3 5 9 7 9    "
},
{
  "id": "subsection-sbsgroup-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-3",
  "type": "Figure",
  "number": "24.29",
  "title": "",
  "body": " Overall SBS Group    One.  Two.  Three.    Four.  Five.  Six.    "
},
{
  "id": "subsection-sbsgroup-8-1-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-1-1",
  "type": "Figure",
  "number": "24.30",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-1-2",
  "type": "Figure",
  "number": "24.31",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-1-3",
  "type": "Figure",
  "number": "24.32",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-1-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-1-4",
  "type": "Figure",
  "number": "24.33",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-2-1",
  "type": "Figure",
  "number": "24.34",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-2-2",
  "type": "Figure",
  "number": "24.35",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-2-3",
  "type": "Figure",
  "number": "24.36",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-2-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-2-4",
  "type": "Figure",
  "number": "24.37",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-3-1",
  "type": "Figure",
  "number": "24.38",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-3-2",
  "type": "Figure",
  "number": "24.39",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-3-3",
  "type": "Figure",
  "number": "24.40",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-8-3-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-8-3-4",
  "type": "Figure",
  "number": "24.41",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-10",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-10",
  "type": "Figure",
  "number": "24.42",
  "title": "",
  "body": " Twelve images, arranged in a grid                                                          "
},
{
  "id": "subsection-sbsgroup-12-1-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-1-1",
  "type": "Figure",
  "number": "24.43",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-1-2",
  "type": "Figure",
  "number": "24.44",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-1-3",
  "type": "Figure",
  "number": "24.45",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-1-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-1-4",
  "type": "Figure",
  "number": "24.46",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-2-1",
  "type": "Figure",
  "number": "24.47",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-2-2",
  "type": "Figure",
  "number": "24.48",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-2-3",
  "type": "Figure",
  "number": "24.49",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-2-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-2-4",
  "type": "Figure",
  "number": "24.50",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-1",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-3-1",
  "type": "Figure",
  "number": "24.51",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-2",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-3-2",
  "type": "Figure",
  "number": "24.52",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-3",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-3-3",
  "type": "Figure",
  "number": "24.53",
  "title": "",
  "body": "   "
},
{
  "id": "subsection-sbsgroup-12-3-4",
  "level": "2",
  "url": "section-side-by-side.html#subsection-sbsgroup-12-3-4",
  "type": "Figure",
  "number": "24.54",
  "title": "",
  "body": "   "
},
{
  "id": "section-side-by-side-18-3",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-18-3",
  "type": "Activity",
  "number": "24.1",
  "title": "",
  "body": "   Here is text block 1  Here is text block 2    "
},
{
  "id": "section-side-by-side-18-4",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-18-4",
  "type": "Example",
  "number": "24.55",
  "title": "",
  "body": "   Here is text block 1  Here is text block 2    "
},
{
  "id": "section-side-by-side-18-6",
  "level": "2",
  "url": "section-side-by-side.html#section-side-by-side-18-6",
  "type": "Example",
  "number": "24.56",
  "title": "",
  "body": "    Here is text block 1  Here is text block 2    Here is text block 3  Here is text block 4     "
},
{
  "id": "figure-traditional",
  "level": "2",
  "url": "section-side-by-side.html#figure-traditional",
  "type": "Figure",
  "number": "24.57",
  "title": "",
  "body": " A traditional figure   "
},
{
  "id": "section-side-by-side-gallery",
  "level": "1",
  "url": "section-side-by-side-gallery.html",
  "type": "Section",
  "number": "25",
  "title": "Side-by-Side Gallery",
  "body": " Side-by-Side Gallery  This subsection attempts to survey all the possible items that can be placed into a sidebyside element, in various combinations. While intended to be exhaustive across contents, it does not test all possibilities, and is not meant to be instructive (see for that). The layout is identical for each sidebyside , 5% margins, panel widths of 40% and 45%, leaving 5% for the space between the panels. The vertical alignment is left at the default, top .  We begin with simpler atomic items. If necessary, comments follow each.   Single <p> (left), <stack> (right)   Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae. Curabitur sagittis, risus non suscipit pulvinar, enim tortor posuere purus, id dignissim sapien sapien non dui. Vestibulum ultrices, enim a ornare consectetur, nisl est iaculis arcu, eget scelerisque nunc magna a nisl. Vestibulum vestibulum ante sit amet ex vulputate, eu facilisis sapien tempor.   Aliquam dui nisi, pharetra id enim vel, imperdiet laoreet risus. Nunc convallis elit eu erat imperdiet tincidunt. Sed eget augue et nunc mollis tempor. Suspendisse luctus elit non lorem scelerisque, nec lacinia lectus dictum.  Vivamus ut orci nisl. Donec eleifend ultricies tortor, a pellentesque neque dignissim in. Praesent maximus, augue eu pretium auctor, dolor quam feugiat augue, ut vulputate nunc eros vitae massa. Phasellus quis ante quis est venenatis dapibus eget luctus ipsum.      An <ol> with simple items, a <ul> with items with paragraphs    Blue  Red  Green  Purple  Violet  Brown    Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae.  Curabitur sagittis, risus non suscipit pulvinar, enim tortor posuere purus, id dignissim sapien sapien non dui.  Vestibulum ultrices, enim a ornare consectetur, nisl est iaculis arcu, eget scelerisque nunc magna a nisl.  Vestibulum vestibulum ante sit amet ex vulputate, eu facilisis sapien tempor.      A <program> and a <console>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  19088743 (integer) and 19088.742188 (float)      Note that these two chunks of verbatim text will very likely exceed the right side of a too-skinny panel. We have severly edited these two examples from previous appearances just to fit here.   An <poem> and a <tabular>    To A Friend Whose Work Has Come To Nothing  William Butler Yeats   Now all the truth is out,  Be secret and take defeat  From any brazen throat,  For how can you compete,  Being honour bred, with one  Who, were it proved he lies,  Were neither shamed in his own  Nor in his neighbours' eyes?  Bred to a harder thing  Than Triumph, turn away  And like a laughing string  Whereon mad fingers play  Amid a place of stone,  Be secret and exult,  Because of all things known  That is most difficult.      Organism Classification   Trout Fish  Monkey Mammal  Crow Bird  Crimini Fungus  Bee Insect     A tabular can exceed the width of its panel in print, while in HTML it may reflow individual cells to stay within a panel, depending on their contents.   A <pre> , and a <pre> employing <cline>   Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae.   Vestibulum sit amet est non  lacus accumsan iaculis  aliquam nec leo. Maecenas  placerat consequat quam,  a lobortis odio convallis  vitae.     Be aware that the lines of pre can spill outside of its panel without any word-wrapping. So you may need to vary panel widths or rearrange line breaks manually. Page width is a scarce resource.   An identical <image> , twice       Images will scale to fill their panel's width. We provide no services to change the aspect ratio of your images, that is your responsibility to accomplish elsewhere. This rectangular image will have slightly different widths, and so will be slightly deeper in the right panel (at a 45:40 ratio). Remember, vertical alignment is at the top.  Now we turn to captioned items: figure , table , listing , and the anomalous named list , list , whose future is uncertain. We test subcaptions here. Note that many different atomic items can go in a figure, and largely they will behave in a sidebyside much as they do when placed in a panel all by themselves ( captionless).   A <figure> and a <table>    A Rectangular Test Image     Classifying Organisms    Organism Classification   Trout Fish  Monkey Mammal  Crow Bird  Crimini Fungus  Bee Insect       A <listing> and a <list>    A statistical computation   n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means     Colors Again   We have named list of colors.    Blue  Red  Green  Purple  Violet  Brown    That was nice.      Now we have some more interactive elements.        Videos can be placed quite compactly for HTML output, but we display a fair amount of information for a YouTube video in print, and therefore two videos side-by-side gets pretty crowded. The examples above have the bare minimum amount of information attached (not in an overarching figure ), and the bare amount which which is displayed in print. We could relax our common spacing to make it a bit better. Read about side-by-side groups ( sbsgroup ) and experiment with stacking several sub-captioned videos into an overall captioned figure ( ). For other examples see and .  "
},
{
  "id": "section-side-by-side-gallery-4",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-4",
  "type": "Figure",
  "number": "25.1",
  "title": "",
  "body": " Single <p> (left), <stack> (right)   Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae. Curabitur sagittis, risus non suscipit pulvinar, enim tortor posuere purus, id dignissim sapien sapien non dui. Vestibulum ultrices, enim a ornare consectetur, nisl est iaculis arcu, eget scelerisque nunc magna a nisl. Vestibulum vestibulum ante sit amet ex vulputate, eu facilisis sapien tempor.   Aliquam dui nisi, pharetra id enim vel, imperdiet laoreet risus. Nunc convallis elit eu erat imperdiet tincidunt. Sed eget augue et nunc mollis tempor. Suspendisse luctus elit non lorem scelerisque, nec lacinia lectus dictum.  Vivamus ut orci nisl. Donec eleifend ultricies tortor, a pellentesque neque dignissim in. Praesent maximus, augue eu pretium auctor, dolor quam feugiat augue, ut vulputate nunc eros vitae massa. Phasellus quis ante quis est venenatis dapibus eget luctus ipsum.    "
},
{
  "id": "section-side-by-side-gallery-5",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-5",
  "type": "Figure",
  "number": "25.2",
  "title": "",
  "body": " An <ol> with simple items, a <ul> with items with paragraphs    Blue  Red  Green  Purple  Violet  Brown    Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae.  Curabitur sagittis, risus non suscipit pulvinar, enim tortor posuere purus, id dignissim sapien sapien non dui.  Vestibulum ultrices, enim a ornare consectetur, nisl est iaculis arcu, eget scelerisque nunc magna a nisl.  Vestibulum vestibulum ante sit amet ex vulputate, eu facilisis sapien tempor.    "
},
{
  "id": "section-side-by-side-gallery-6",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-6",
  "type": "Figure",
  "number": "25.3",
  "title": "",
  "body": " A <program> and a <console>    n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means    gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  19088743 (integer) and 19088.742188 (float)     "
},
{
  "id": "section-side-by-side-gallery-8",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-8",
  "type": "Figure",
  "number": "25.4",
  "title": "",
  "body": " An <poem> and a <tabular>    To A Friend Whose Work Has Come To Nothing  William Butler Yeats   Now all the truth is out,  Be secret and take defeat  From any brazen throat,  For how can you compete,  Being honour bred, with one  Who, were it proved he lies,  Were neither shamed in his own  Nor in his neighbours' eyes?  Bred to a harder thing  Than Triumph, turn away  And like a laughing string  Whereon mad fingers play  Amid a place of stone,  Be secret and exult,  Because of all things known  That is most difficult.      Organism Classification   Trout Fish  Monkey Mammal  Crow Bird  Crimini Fungus  Bee Insect    "
},
{
  "id": "section-side-by-side-gallery-10",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-10",
  "type": "Figure",
  "number": "25.5",
  "title": "",
  "body": " A <pre> , and a <pre> employing <cline>   Vestibulum sit amet est non lacus accumsan iaculis aliquam nec leo. Maecenas placerat consequat quam, a lobortis odio convallis vitae.   Vestibulum sit amet est non  lacus accumsan iaculis  aliquam nec leo. Maecenas  placerat consequat quam,  a lobortis odio convallis  vitae.    "
},
{
  "id": "section-side-by-side-gallery-12",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-12",
  "type": "Figure",
  "number": "25.6",
  "title": "",
  "body": " An identical <image> , twice      "
},
{
  "id": "section-side-by-side-gallery-15",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-15",
  "type": "Figure",
  "number": "25.7",
  "title": "",
  "body": " A <figure> and a <table>    A Rectangular Test Image     Classifying Organisms    Organism Classification   Trout Fish  Monkey Mammal  Crow Bird  Crimini Fungus  Bee Insect     "
},
{
  "id": "section-side-by-side-gallery-16",
  "level": "2",
  "url": "section-side-by-side-gallery.html#section-side-by-side-gallery-16",
  "type": "Figure",
  "number": "25.8",
  "title": "",
  "body": " A <listing> and a <list>    A statistical computation   n_loops <- 10 x.means <- numeric(n_loops) for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) x.means[i] <- mean(x) } x.means     Colors Again   We have named list of colors.    Blue  Red  Green  Purple  Violet  Brown    That was nice.     "
},
{
  "id": "section-open-problems",
  "level": "1",
  "url": "section-open-problems.html",
  "type": "Section",
  "number": "26",
  "title": "Open Problems",
  "body": " Open Problems  Like for mathematical research. Experimental as of 2023-07-06.    Solve the Riemann Hypothesis Footnotes were once incomplete on open problems.  and provide a short proof of Fermat's Last Theorem.    "
},
{
  "id": "section-open-problems-3",
  "level": "2",
  "url": "section-open-problems.html#section-open-problems-3",
  "type": "Open Problem",
  "number": "M.N",
  "title": "",
  "body": "  Solve the Riemann Hypothesis Footnotes were once incomplete on open problems.  and provide a short proof of Fermat's Last Theorem.   "
},
{
  "id": "section-poetry",
  "level": "1",
  "url": "section-poetry.html",
  "type": "Section",
  "number": "27",
  "title": "Poetry",
  "body": " Poetry  There is support for poems via the poem poem tag, which can contain a title , author and multiple stanza , each containing multiple line . See the source of the following poem for an example of the exact arrangement. Note how the first quote crosses two line elements and how this is handled in the source. There are many very flexible options for horizontal alignment and indentation. Further extensive examples, constructed by Jahrme Risner, are available in the example Humanities document.   The Charge of the Light Brigade  Charge of the Light Brigade, The, Tennyson  Alfred Lord Tennyson   Half a league, half a league,  Half a league onward,  All in the valley of Death  Rode the six hundred.  Forward, the Light Brigade!  Charge for the guns! he said:  Into the valley of Death  Rode the six hundred.    Charge of the Light Brigade second stanza  Forward, the Light Brigade!  Was there a man dismay'd?  Not tho' the soldier knew  Someone had blunder'd:  Theirs not to make reply,  Theirs not to reason why,  Theirs but to do and die:  Into the valley of Death  Rode the six hundred.    Ken Levasseur, who teaches at UMass-Lowell, has limericks in his Applied Discrete Structures textbook. When he reported that they were unable to be the target of a cross-reference, Karl-Dieter Crisman penned the following limerick.   Karl-Dieter Crisman   CS students studying in Lowell  Required their books to have soul.  Along came their teacher  Who asked for this feature:  A poem that lives in a knowl.    And when yours truly tried to joke about poetry on GitHub CLI #182 , back came:   Steven Clontz   There once was a maintainer named Rob  Who told bad jokes while on the job  While they were lame  You could say the same  Of Steven's limericks that cause you to sob    "
},
{
  "id": "section-atomic-items",
  "level": "1",
  "url": "section-atomic-items.html",
  "type": "Section",
  "number": "28",
  "title": "Atomic Objects",
  "body": " Atomic Objects   Some PreTeXt objects are relatively indivisable and are used as components of other structures. We call them atomic , even if the term is not perfect. A good example is <image> (next, ). This section is arranged according to these objects and tests the various ways they can be employed.  We frequently include some nonsense text inside short intervening paragraphs to test spacing and establish margins.     <image>  An <image> can be placed in five different ways:  all by itself, as a peer of <p> typically, with layout control,  inside a <figure> , earning a number and caption,  inside a <sidebyside> , with size and layout configured,  inside a <figure> inside a <sidebyside> , with size and layout configured, with a number and caption, and  inside a <figure> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   Width set at 40%, so equal margins and thus centered. Aenean faucibus augue tellus, et sollicitudin tortor finibus non. Maecenas semper dolor quis diam placerat, iaculis sollicitudin augue finibus. Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non.   Asymmetric margins of 20% and 40% given, implying 40% width, equal to previous instance. Vivamus suscipit diam eget mi cursus viverra.   As a plain component of a <sidebyside> . Widths here are 20% and 30%, margins and gaps are automatic, default alignment on top edges. Nulla pharetra imperdiet elit, in sodales nibh blandit ultricies. Maecenas efficitur ac felis ut pharetra.      Inside a <figure> with no adjustments, so default behavior. Note how a <figure> occupies the entire width of the page, so then does the caption.   New Zealand Landscape    Inside a <figure> with asymmetric (large) margins of 30% and 60%. Quisque finibus augue sit amet facilisis fringilla. Aenean faucibus augue tellus, et sollicitudin tortor finibus non.   New Zealand Landscape    Inside figures inside a <sidebyside> . Same widths as previous <sidebyside> but alignment on bottoms of the panels, to partially align captions. Note how the captions are constrained in width by the width of the panels of the side-by-side.    NZ Landscape     New Zealand Terrascape     Identical code to previous example, but now wrapped in an overall <figure> , which has its own caption and number, leaving the interior figures to be sub-numbered. Cross-references use the full number: .   Amalgamation of Scapes    NZ Landscape     New Zealand Terrascape      For latex , in some circumstances it is desirable to print the image on the next line, but backed up by some amount. This top-aligns the image with a number of some sort off to the left. The following are tests for this behavior. Here is a list.          A rotation=\"n\" attribute applied to a bare image will rotate the image by n . The vertical space adjusts to accomodate the rotated image in the latex version but not in the html version.   Rotated Images    rotate=\"180\"     rotate=\"15\"     For pdf output destined for print, when the publication file entry latex\/@print=\"yes\" , a @landscape=\"yes\" attribute applied to a <figure> , <table> , <list> or <listing> will cause the object to be rotated 90 and presented on its own page. Placement of the float is determined by latex and multipage objects are not supported.   This landscape figure will be rotated so the long edge is vertical, and will appear on its own page in print PDF output.     Wide figure containing a sidebyside containing a rotated image. This will be rotated and appear on its own page in print PDF output.    Quack     Propulsion System                            <video>  An <video> can be placed in five different ways:  all by itself, as a peer of <p> typically, with layout control,  inside a <figure> , earning a number and caption,  inside a <sidebyside> , with size and layout configured,  inside a <figure> inside a <sidebyside> , with size and layout configured, with a number and caption, and  inside a <figure> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  Videos can be realized in many forms, and can come from a variety of sources. See for tests of some of that variety. Here we are testing placement within surroundings and testing the schema for location. But we do have two videos in each test, one provided as a local file and one embedded from a service.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Width set at 40%, so equal margins and thus centered. Aenean faucibus augue tellus, et sollicitudin tortor finibus non. Maecenas semper dolor quis diam placerat, iaculis sollicitudin augue finibus. Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Asymmetric margins of 20% and 40% given, implying 40% width, equal to previous instance. Vivamus suscipit diam eget mi cursus viverra.   Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   As a plain component of a <sidebyside> . Widths here are 20% and 30%, margins and gaps are automatic, default alignment on top edges. Nulla pharetra imperdiet elit, in sodales nibh blandit ultricies. Maecenas efficitur ac felis ut pharetra.      Inside a <figure> with no adjustments, so default behavior. Note how a <figure> occupies the entire width of the page, so then does the caption.   University of Puget Sound Promotional Video    Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Pre-Roll Countdown    Inside a <figure> with asymmetric (large) margins of 30% and 60%. Quisque finibus augue sit amet facilisis fringilla. Aenean faucibus augue tellus, et sollicitudin tortor finibus non.   University of Puget Sound Promotional Video    Vestibulum facilisis ligula lectus, ac tristique nisl aliquet non. Quisque ornare felis arcu. Vivamus suscipit diam eget mi cursus viverra.   Pre-Roll Countdown    Inside figures inside a <sidebyside> . Same widths as previous <sidebyside> but alignment on bottoms of the panels, to partially align captions. Note how the captions are constrained in width by the width of the panels of the side-by-side.    Pre-Roll Countdown     University of Puget Sound Promotional Video     Identical code to previous example, but now wrapped in an overall <figure> , which has its own caption and number, leaving the interior figures to be sub-numbered. Cross-references use the full number: .   Amalgamation of Videos    Pre-Roll Countdown     University of Puget Sound Promotional Video        <program> , <console>  A <program> and\/or <console> can be placed in at least six different ways:  all by itself, as a peer of <p> typically, with layout control  inside a <listing> , earning a number and caption, with layout control  inside a <sidebyside> , with size and layout configured  inside a <sidebyside> , with size and layout configured, and inside a <figure>  inside a <sidebyside> , with size and layout configured, with each inside a <listing> , earning different numbers  inside a <figure> inside a <sidebyside> inside a <listing> , with size and layout configured, with a number and caption, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  Programs can be realized in many forms, and can come from a variety of sources. See for tests of some of that variety. Here we are testing placement within surroundings and testing the schema for location. But we do have two videos in each test, one provided as a local file and one embedded from a service.  All by itsef, with no layout specified, so showing the default size and placement. Vivamus in congue massa. Morbi condimentum ac magna at accumsan. Vestibulum ac augue eu lorem semper gravida.   n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   Now a program with shorter lines, with no layout control.   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   And a <console> element, also with no layout control.   gcc -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    Now similar examples, but with layout control: margins and width.  A <program> with a width attribute, so centered and with equal margins. Note how the lines word wrap due to the smaller width.   n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means   A <program> with short lines, so significant, and asymmetric margins, which experimentally do not induce any word-wrapping.   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   A longer <console> , with margins so significant the appearance is ill-advised.   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    Two <listing> , with <caption> , and no layout control.   Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     Same two <listing> , but now with layout control on the <program> and <console> .   Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     This <sidebyside> gives each panel a 30% width. The remaining 10% is apportioned for margins and separation.    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means    This is the same three-panel <sidebyside> , but now inside of a <figure> , earning a number and a <caption> .   Some Code Samples    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means     Finally, a smaller <program> and a smaller <console> , each inside a <listing> , as the two panels of a <sidebyside> with no margins, and slightly different widths (to control word-wrapping). The panels have been aligned vertically so their captions align.    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188      And again, the two-panel <sidebyside> of <listing> , but now inside a <figure> that has a number and a caption. And then the <listing> are sub-numbered as (a) and (b).   Two Code Listings    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188         <tabular>  A <tabular> can be placed in six different ways:  all by itself, as a peer of <p> typically, with no layout control and hence with a natural width, and centered  all by itself, as a peer of <p> typically, with explicit layout control,  inside a <table> , earning a number and title,  inside a <sidebyside> , with size and layout configured,  inside a <table> inside a <sidebyside> , with size and layout configured, with a number and title, and  inside a <table> inside a <sidebyside> inside a <figure> , with size and layout configured, with a number and title, but now sub-numbered ((a), (b), (c), ).  Examples of each, and more.  A <tabular> realized by latex for PDF\/print will normally be as wide as necessary to hold the content, without word-wrapping the content of any cell that is not explicitly authored that way. This is the most rigid of the content types we call planar. So for PreTeXt output as latex , when you explicitly constrain the width to be less than the natural width (including use as a panel of a <sidebyside> , or even setting margins) the table will be scaled down in width, which can result in an apparent font size very much smaller than that of the surrounding text. Note that we do not ever scale a tabular up to be wider with a larger font size. Note also that if there is no attempt to control the space for the table (no layout control, not in a <sidebyside> ) then no scaling is attempted at all and the table may be wider than the text and protrude into the right margin. For more, see the three examples at: , , . Generally, much of the commentary and testing here is about latex \/PDF\/print. While for HTML output the cells will usually automatically word-wrap to fit in the available space, without adjusting the font size. Some might like this behavior and some might not.  Data in a table form can be placed in amongst a series of paragraphs. With no layout control, it will occupy its natural width and be centered.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    The same effect can be had by specifying that the width attribute have the value auto , but do not specify any margins . We test multiple footnotes in a <tabular> , not included in a <table> .    State Only from the West Coast.  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223 Wow! That is as big as many countries.  163,696  1850    In amongst a run of paragraphs (or similar) a <tabular> can be placed with layout control. For latex output, this will scale the table to fit within the explicit, or implicit, width. This can result in obvious differences in the apparent font size. We first have a width that is experimentally similar to the natural width, with asymetric margins. Then a narrow width, and a wide width, as an illustration.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Narrow. 45% width. 20% margin left, 35% margin right.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Wide. 97% width. 1% margin left, 2% right.    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    Naturally, a <tabular> can be placed inside a <table> , earning a number and a title.   Natural Width    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     A little narrower, but still centered by default.   Width of 60%, automatic centering    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Very narrow, asymmetric margins.   Width of 30%, 30% left margin, 40% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Wider than necessary, asymmetric margins.   Width of 90%, 8% left margin, 2% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     The next table is purposely much too wide. In we make no attempt to control the width, and so it will extend into the margins. In we have simple added the attribute width=\"auto\" . This attempt to use layout control will cause an automatic reduction in width and a smaller apparent font size. Adjusting margins providing an explicit percentage width, or placing the tabular as a panel of <sidebyside> will have the same effect. In we have set the width explicity to 100% and so it should be identical to the automatic width case just prior.   Tabular too wide, no layout control    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles      Tabular too wide, scale to automatic width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles      Tabular too wide, scale to 100% width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles     Now into <sidebyside> in various ways and with various sizes. First, two <tabular> as panels with widths at 60% and 30%. Note that in latex \/PDF\/print the tabular of functional values does not need the full 30% width, so it is at its natural size and centered within its panel.     State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          3  9.734    5  2.175     Let's do that again, but with widths experimentally set to make font sizes match (approximately).     State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          3  9.734    5  2.175     Same tabular, which fills roughly 80% by itself, packed into a single <sidebyside> with just a 2% gap, and no side margins.         State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850          State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850     Natural widths, but now as a pair of tables.    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175      Finally, as two individual <table> , grouped and laid out via a <sidebyside> , and collected as a <figure> . Which causes sub-numbering of the two enclosed <table> .   Geography and Mathematics    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175        "
},
{
  "id": "section-atomic-items-2-1",
  "level": "2",
  "url": "section-atomic-items.html#section-atomic-items-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "atomic "
},
{
  "id": "atomic-image-12",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-12",
  "type": "Figure",
  "number": "28.1",
  "title": "",
  "body": " New Zealand Landscape   "
},
{
  "id": "atomic-image-14",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-14",
  "type": "Figure",
  "number": "28.2",
  "title": "",
  "body": " New Zealand Landscape   "
},
{
  "id": "atomic-image-16-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-16-1",
  "type": "Figure",
  "number": "28.3",
  "title": "",
  "body": " NZ Landscape   "
},
{
  "id": "atomic-image-16-2",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-16-2",
  "type": "Figure",
  "number": "28.4",
  "title": "",
  "body": " New Zealand Terrascape   "
},
{
  "id": "atomic-image-18",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-18",
  "type": "Figure",
  "number": "28.5",
  "title": "",
  "body": " Amalgamation of Scapes    NZ Landscape     New Zealand Terrascape     "
},
{
  "id": "atomic-image-21",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-21",
  "type": "Figure",
  "number": "28.6",
  "title": "",
  "body": " Rotated Images    rotate=\"180\"     rotate=\"15\"    "
},
{
  "id": "propulsion_system2",
  "level": "2",
  "url": "section-atomic-items.html#propulsion_system2",
  "type": "Figure",
  "number": "28.7",
  "title": "",
  "body": " This landscape figure will be rotated so the long edge is vertical, and will appear on its own page in print PDF output.   "
},
{
  "id": "rotated-fig-with-sbs",
  "level": "2",
  "url": "section-atomic-items.html#rotated-fig-with-sbs",
  "type": "Figure",
  "number": "28.8",
  "title": "",
  "body": " Wide figure containing a sidebyside containing a rotated image. This will be rotated and appear on its own page in print PDF output.    Quack     Propulsion System     "
},
{
  "id": "atomic-image-25",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-25",
  "type": "Checkpoint",
  "number": "28.9",
  "title": "",
  "body": "    "
},
{
  "id": "atomic-image-26-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-26-1",
  "type": "Exercise",
  "number": "28.1.1",
  "title": "",
  "body": "    "
},
{
  "id": "atomic-image-26-2-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-26-2-1",
  "type": "Exercise",
  "number": "28.1.2",
  "title": "",
  "body": "  "
},
{
  "id": "atomic-image-26-2-2",
  "level": "2",
  "url": "section-atomic-items.html#atomic-image-26-2-2",
  "type": "Exercise",
  "number": "28.1.3",
  "title": "",
  "body": "  "
},
{
  "id": "atomic-video-19",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-19",
  "type": "Figure",
  "number": "28.10",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-21",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-21",
  "type": "Figure",
  "number": "28.11",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-23",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-23",
  "type": "Figure",
  "number": "28.12",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-25",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-25",
  "type": "Figure",
  "number": "28.13",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-27-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-27-1",
  "type": "Figure",
  "number": "28.14",
  "title": "",
  "body": " Pre-Roll Countdown   "
},
{
  "id": "atomic-video-27-2",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-27-2",
  "type": "Figure",
  "number": "28.15",
  "title": "",
  "body": " University of Puget Sound Promotional Video   "
},
{
  "id": "atomic-video-29",
  "level": "2",
  "url": "section-atomic-items.html#atomic-video-29",
  "type": "Figure",
  "number": "28.16",
  "title": "",
  "body": " Amalgamation of Videos    Pre-Roll Countdown     University of Puget Sound Promotional Video     "
},
{
  "id": "atomic-program-18",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-18",
  "type": "Listing",
  "number": "28.17",
  "title": "",
  "body": " Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-19",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-19",
  "type": "Listing",
  "number": "28.18",
  "title": "",
  "body": " A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-21",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-21",
  "type": "Listing",
  "number": "28.19",
  "title": "",
  "body": " Hello, World! in C   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-22",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-22",
  "type": "Listing",
  "number": "28.20",
  "title": "",
  "body": " A console session on a Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-26",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-26",
  "type": "Figure",
  "number": "28.21",
  "title": "",
  "body": " Some Code Samples    \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }    gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188     n_loops <- 10 x.means <- numeric(n_loops) # create a vector of zeros for results for (i in 1:n_loops){ x <- as.integer(runif(100, 1, 7)) # 1 to 6, uniformly x.means[i] <- mean(x) } x.means    "
},
{
  "id": "atomic-program-28-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-28-1",
  "type": "Listing",
  "number": "28.22",
  "title": "",
  "body": " Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }   "
},
{
  "id": "atomic-program-28-2",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-28-2",
  "type": "Listing",
  "number": "28.23",
  "title": "",
  "body": " Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188    "
},
{
  "id": "atomic-program-30",
  "level": "2",
  "url": "section-atomic-items.html#atomic-program-30",
  "type": "Figure",
  "number": "28.24",
  "title": "",
  "body": " Two Code Listings    Hello!   \/* Hello World program *\/ #include<stdio.h> main() { printf(\"Hello, World!\"); }     Raspberry Pi   gcc -Wall -o intAndFloat intAndFloat.c  .\/intAndFloat  The integer is 19088743 and the float is 19088.742188      "
},
{
  "id": "atomic-tabular-15",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-15",
  "type": "Table",
  "number": "28.25",
  "title": "Natural Width",
  "body": " Natural Width    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-17",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-17",
  "type": "Table",
  "number": "28.26",
  "title": "Width of 60%, automatic centering",
  "body": " Width of 60%, automatic centering    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-19",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-19",
  "type": "Table",
  "number": "28.27",
  "title": "Width of 30%, 30% left margin, 40% right margin",
  "body": " Width of 30%, 30% left margin, 40% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-21",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-21",
  "type": "Table",
  "number": "28.28",
  "title": "Width of 90%, 8% left margin, 2% right margin",
  "body": " Width of 90%, 8% left margin, 2% right margin    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "natural-too-wide",
  "level": "2",
  "url": "section-atomic-items.html#natural-too-wide",
  "type": "Table",
  "number": "28.29",
  "title": "Tabular too wide, no layout control",
  "body": " Tabular too wide, no layout control    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "scale-down-auto",
  "level": "2",
  "url": "section-atomic-items.html#scale-down-auto",
  "type": "Table",
  "number": "28.30",
  "title": "Tabular too wide, scale to automatic width",
  "body": " Tabular too wide, scale to automatic width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "scale-down-100",
  "level": "2",
  "url": "section-atomic-items.html#scale-down-100",
  "type": "Table",
  "number": "28.31",
  "title": "Tabular too wide, scale to 100% width",
  "body": " Tabular too wide, scale to 100% width    State  Population  Area (sq. mi.)  Statehood (Year)  Capitol City  Largest City    Washington  7,614,893  71,362  1889  Olympia  Seattle    Oregon  4,217,737  98,381  1859  Salem  Portland    California  39,512,223  163,696  1850  Sacremento  Los Angeles    "
},
{
  "id": "atomic-tabular-33-1",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-33-1",
  "type": "Table",
  "number": "28.32",
  "title": "West Coast",
  "body": " West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850    "
},
{
  "id": "atomic-tabular-33-2",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-33-2",
  "type": "Table",
  "number": "28.33",
  "title": "Function Values",
  "body": " Function Values        3  9.734    5  2.175    "
},
{
  "id": "atomic-tabular-35",
  "level": "2",
  "url": "section-atomic-items.html#atomic-tabular-35",
  "type": "Figure",
  "number": "28.34",
  "title": "",
  "body": " Geography and Mathematics    West Coast    State  Population  Area (sq. mi.)  Statehood (Year)    Washington  7,614,893  71,362  1889    Oregon  4,217,737  98,381  1859    California  39,512,223  163,696  1850      Function Values        3  9.734    5  2.175      "
},
{
  "id": "section-advanced-numbering",
  "level": "1",
  "url": "section-advanced-numbering.html",
  "type": "Section",
  "number": "29",
  "title": "Advanced Numbering",
  "body": " Advanced Numbering   This section demonstrates the numbering numbering patterns used throughout PreTeXt . There are five subsections. Two intermediate subsections each have two subsubsections. This creates a total of seven divisions that are leaves of the document tree. In each leaf we have placed two numbered theorems, for a total of fourteen. There is no real content, this is just a demonstration.  Use values of 0 through 3 for the numbering.theorems.level parameter to see how these numbers change accordingly. It is easiest to compare if you use chunk.level < 2 so the theorems all land on the same page if you are previewing in HTML.    One  A document leaf.   First Theorem  Cauchy  No statement.      Second Theorem  Bunyakovsky  No statement.     Two  Further subdivided.   Uno  A document leaf.   First Theorem!  Schwarz  No statement.    Second Theorem?  Inequality  No statement.     Dos  A document leaf.   First Theorem?  No statement.    Second Theorem!  No statement.      Three  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Four   Further subdivided. We include two theorems as numbered items in the introduction to test their numbers, which should always be logical.   Good Numbered Theorem One  No statement.    Good Numbered Theorem Two  No statement.     Uno  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Dos  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Conclusion now. We include two theorems as numbered items in the conclusion to test their numbers, which are sometimes totally illogical and are inconsistent across output formats. To see the effect, set the level for numbering theorems to 3 . See this GitHub Issue #139 for details.   Bad Numbered Theorem One  No statement.    Bad Numbered Theorem Two  No statement.      Five  A document leaf.   First Theorem  No statement.    Second Theorem  No statement.     Theorems in This Section  We have a lot of theorems in this section, so we illustrate including an automatic list of these here. We use the elements attribute to limit the list to theorem elements, and we use the scope attribute to limit the list to this section . You can use an introductory p like this one, or not. The list gets no title or visual separation, so use the usual subdivision elements to make that happen. The elements attribute can be a space-delimited list of many different elements. This list should not include the Fundamental Theorem of Calculus, Theorem . See a slightly different example in .     A Title with ] a Right Bracket  latex has trouble with brackets that end up inside optional arguments, so this subsection title is only a check on the defense against that. And now an <exercise> with a title that could really be a problem.  A Right Brace } and a Right Bracket]  The right brace is is used as a grouping character in latex so this is just a test of its behavior in titles.   A faux hint to get this exercise to migrate into a <solutions> .     A Title with } a Right Brace  And now a right brace in a division title.    A Title with a Math Right Bracket  And now a right bracket within math in a division title.  We do not test a right brace within math, since it should be escaped, as is normal latex practice.    Just an Exercise  An Extraneous Exercise  This exercise is here just as a test of the <solutions> division coming next. So it is serving a purpose, even if it is not apparent.   A hint, so this exercise looks identical in structure to the one in the previous subsection.      This is a <solutions> division, which will be a peer of the other <subsection> in this <section> . The default behavior is to look to the parent division (a <section> here) and collect all the hints, answers, and solutions from every <exercise> (and friends) inside this containing division. (There are just two, similar inline <exercise> .)  But instead of the default, we employ a scope attribute to define the parent division of the exercises whose solutions will be shown. In this example we specify the <subsection> that is two back, the one which tests brackets in titles.    "
},
{
  "id": "theorem-number-01",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-01",
  "type": "Theorem",
  "number": "29.1",
  "title": "First Theorem.",
  "body": " First Theorem  Cauchy  No statement.  "
},
{
  "id": "theorem-number-02",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-02",
  "type": "Theorem",
  "number": "29.2",
  "title": "Second Theorem.",
  "body": " Second Theorem  Bunyakovsky  No statement.  "
},
{
  "id": "theorem-number-03",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-03",
  "type": "Theorem",
  "number": "29.3",
  "title": "First Theorem!",
  "body": " First Theorem!  Schwarz  No statement.  "
},
{
  "id": "theorem-number-04",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-04",
  "type": "Theorem",
  "number": "29.4",
  "title": "Second Theorem?",
  "body": " Second Theorem?  Inequality  No statement.  "
},
{
  "id": "theorem-number-05",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-05",
  "type": "Theorem",
  "number": "29.5",
  "title": "First Theorem?",
  "body": " First Theorem?  No statement.  "
},
{
  "id": "theorem-number-06",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-06",
  "type": "Theorem",
  "number": "29.6",
  "title": "Second Theorem!",
  "body": " Second Theorem!  No statement.  "
},
{
  "id": "theorem-number-07",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-07",
  "type": "Theorem",
  "number": "29.7",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-08",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-08",
  "type": "Theorem",
  "number": "29.8",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-good-one",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-good-one",
  "type": "Theorem",
  "number": "29.9",
  "title": "Good Numbered Theorem One.",
  "body": " Good Numbered Theorem One  No statement.  "
},
{
  "id": "theorem-good-two",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-good-two",
  "type": "Theorem",
  "number": "29.10",
  "title": "Good Numbered Theorem Two.",
  "body": " Good Numbered Theorem Two  No statement.  "
},
{
  "id": "theorem-number-09",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-09",
  "type": "Theorem",
  "number": "29.11",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-10",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-10",
  "type": "Theorem",
  "number": "29.12",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-number-11",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-11",
  "type": "Theorem",
  "number": "29.13",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-12",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-12",
  "type": "Theorem",
  "number": "29.14",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "theorem-bad-one",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-bad-one",
  "type": "Theorem",
  "number": "29.15",
  "title": "Bad Numbered Theorem One.",
  "body": " Bad Numbered Theorem One  No statement.  "
},
{
  "id": "theorem-bad-two",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-bad-two",
  "type": "Theorem",
  "number": "29.16",
  "title": "Bad Numbered Theorem Two.",
  "body": " Bad Numbered Theorem Two  No statement.  "
},
{
  "id": "theorem-number-13",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-13",
  "type": "Theorem",
  "number": "29.17",
  "title": "First Theorem.",
  "body": " First Theorem  No statement.  "
},
{
  "id": "theorem-number-14",
  "level": "2",
  "url": "section-advanced-numbering.html#theorem-number-14",
  "type": "Theorem",
  "number": "29.18",
  "title": "Second Theorem.",
  "body": " Second Theorem  No statement.  "
},
{
  "id": "exercise-difficult-title",
  "level": "2",
  "url": "section-advanced-numbering.html#exercise-difficult-title",
  "type": "Checkpoint",
  "number": "29.19",
  "title": "A Right Brace } and a Right Bracket].",
  "body": "A Right Brace } and a Right Bracket]  The right brace is is used as a grouping character in latex so this is just a test of its behavior in titles.   A faux hint to get this exercise to migrate into a <solutions> .  "
},
{
  "id": "section-advanced-numbering-12-2",
  "level": "2",
  "url": "section-advanced-numbering.html#section-advanced-numbering-12-2",
  "type": "Checkpoint",
  "number": "29.20",
  "title": "An Extraneous Exercise.",
  "body": "An Extraneous Exercise  This exercise is here just as a test of the <solutions> division coming next. So it is serving a purpose, even if it is not apparent.   A hint, so this exercise looks identical in structure to the one in the previous subsection.  "
},
{
  "id": "section-customizations",
  "level": "1",
  "url": "section-customizations.html",
  "type": "Section",
  "number": "30",
  "title": "Customizations",
  "body": " Customizations   Renaming Document Parts, Plus This Is A Really Long Title So That We Can Test How Well It Reacts To The Right Margin And Wraps Around To Form A Couple Of Lines, Plus How It Sits Relative To The Number Of The Subsection  Names name for various parts of a document are determined exactly once for each language, ensuring consistency and saving you the bother of always typing them in.  However, you may want to have Conundrum s conundrum repurposed from proposition in your document and you have no use for any Proposition s. conundrum repurposed from proposition  rename an environment conundrum So you can repurpose the proposition tag to render a different name. Or you might have a Lab Manual and want to rename subsection as Activity . See the docinfo portion of this sample article to see how this is done, in concert with the example below. Note that you may provide versions for different languages by specifying a xml:lang attribute.   Smith   Aah, this is confusing!     Important Notes  If you are renaming many parts of your document, then you may not understand the design philosophy of PreTeXt . In particular, you should not be doing a wholesale shuffle of part , chapter , section , This feature is intended for very limited use and is not considered best practice .  This feature could also be abused to provide a comprehensive suite of translations into a language not yet supported. If so, please contact us about moving your translations into PreTeXt for the benefit of all. Thanks.     Customizing Phrases  There is a facility for providing alternate text for small or short phrases, or other components of a paragraph. Here we just provide some tests. Each is inside of a block quote to identify it clearly.  We have two auxiliary files of custom elements, so you need to adjust the publisher file to specify the second one during testing. First, a very simple string as the variation.   This is an article about alligators.   Now a string which is partially text and partially simple markup.   We like to write with feeling , since it is more fun.   And a mildly more complicated structure (a list) as the variable text.    Some of our favorite colors are  Red  Blue  Green     A cross-reference to test, since context is critical.   See also .   The URLs used as a replacement have the visual attribute which is also managed by the assembly pre-processor to provide a footnote. So this is a good test of the organization of the multiple passes employed by the pre-processor.   A URL that should have a footnote: .    "
},
{
  "id": "proposition-as-conundrum",
  "level": "2",
  "url": "section-customizations.html#proposition-as-conundrum",
  "type": "Conundrum",
  "number": "30.1",
  "title": "",
  "body": " Smith   Aah, this is confusing!   "
},
{
  "id": "section-myopenmath",
  "level": "1",
  "url": "section-myopenmath.html",
  "type": "Section",
  "number": "31",
  "title": "MyOpenMath Interactive Problems",
  "body": " MyOpenMath Interactive Problems  This is a test with two inline exercises containing MyOpenMath (MOM) problems. None of this is in the schema, and all of it is subject to change.  Negative Numbers and Exponents  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)   A Statistical Test  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)   "
},
{
  "id": "section-myopenmath-3",
  "level": "2",
  "url": "section-myopenmath.html#section-myopenmath-3",
  "type": "Checkpoint",
  "number": "31.1",
  "title": "Negative Numbers and Exponents.",
  "body": "Negative Numbers and Exponents  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)  "
},
{
  "id": "section-myopenmath-4",
  "level": "2",
  "url": "section-myopenmath.html#section-myopenmath-4",
  "type": "Checkpoint",
  "number": "31.2",
  "title": "A Statistical Test.",
  "body": "A Statistical Test  This is an introduction, providing articulation between the MOM problem and the contents of the text. For example, you might cross-reference a result or example given previosly. (HTML Note: The resizer for the knowl is not functioning yet.)  "
},
{
  "id": "section-ancillaries",
  "level": "1",
  "url": "section-ancillaries.html",
  "type": "Section",
  "number": "32",
  "title": "Ancillaries",
  "body": " Ancillaries  Once your content is in place, you can begin thinking about various useful derivative works. A natural example for a textbook is an Instructor's Version . Various switches for hints, answers, and solutions to exercises would allow you to include more of these for the use of just an instructor. Here we also demonstrate the <commentary> element. It is similar in many ways to a <paragraphs> in that it can be placed within any division and must be titled. The main difference is that it is not displayed by default, so you must set the string parameter commentary to the value yes . Other distinctions are:  Since it is elective, you need to be careful about cross-references to and from a <commentary> . It is highly likely that you will want to make cross-references within a <commentary>  pointing to other portions of your text, and this is always a good idea. You will want to avoid making cross-references to a <commentary> from other parts of the text, with the exception of a cross-reference that originates within some <commentary> .  Numbered items are prohibited within a <commentary> , such as a <figure> or a <theorem> . Doing so would disrupt consecutive numbering in different versions, with or without, <commentary> included. Numbered equations are not prohibited in the schema, but should definitely be avoided anyway.   After some nonsense text in a paragraph, there is a <commentary> with two paragraphs. For the online version of this sample article, we have enabled commentaries. But if you are experimenting yourself, you will want to be aware if you are enabling these or not.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio orci, ullamcorper eget quam et, viverra tristique magna. Integer auctor arcu a sapien pulvinar elementum. Mauris porta, nulla id molestie dignissim, urna dolor rutrum ligula, eu elementum odio nisl sed libero. Nulla nec libero sem.   Nullam vulputate metus a diam rutrum vehicula. Sed cursus iaculis venenatis. Morbi ullamcorper at mi non facilisis. Cras sit amet justo vel ante luctus placerat. Nunc in ligula iaculis enim condimentum suscipit eget vel mi. Ut at sapien mauris. Vestibulum nec tellus pellentesque, placerat nunc ac, luctus turpis.  Curabitur eros nibh, lacinia at commodo ut, feugiat sit amet velit. Pellentesque venenatis dui vehicula, porta magna at, dignissim metus. Nam fringilla tortor nec dignissim dictum. Cras tempor purus nisi, sit amet aliquam risus ornare vel. Proin ullamcorper pulvinar elementum. Praesent gravida magna in imperdiet pretium. In sed consectetur arcu. Donec imperdiet, urna in egestas suscipit, risus dolor ultrices erat, id ultricies sem nisl eget ex. Fusce at mattis sem. Fusce lacinia purus tellus, nec fringilla nisi maximus vel. commentary contained paragraph  Sed justo ex, efficitur dictum risus nec, eleifend consequat nibh. Proin rutrum mi id metus viverra blandit. In vel ligula a nibh aliquam pellentesque. Duis placerat purus et ligula sollicitudin, sodales consectetur ante viverra.  Mauris fringilla nulla arcu, sagittis ultrices quam malesuada eleifend. Proin tristique elit eu bibendum tincidunt. Donec commodo lorem in magna egestas, vitae malesuada velit ornare. Pellentesque finibus neque in venenatis tristique. In id blandit est, in euismod urna. Donec commodo sagittis ligula, in venenatis nulla porttitor in. Donec nec tortor sit amet felis posuere ultricies. Suspendisse euismod quis ex eu placerat.  "
},
{
  "id": "section-worksheets",
  "level": "1",
  "url": "section-worksheets.html",
  "type": "Section",
  "number": "33",
  "title": "Worksheets",
  "body": " Worksheets   About Worksheets  This is a section full of worksheets. Each is a division of its own, via the <worksheet> element. This is an optional <introduction> to the current <section> . In practice you might want to rip out all the worksheets of an entire book and bundle them up as an activity book.  If you make PDF output you will notice an increased amount of control over layout. Also, if the publication file elects latex draft mode, then there will be visual indicators of prescribed whitespace.    A Geometric Prelude     Practice visualizing vector addition  Use vectors without explicit coordinates     This two-page worksheet was generously donated to the sample article by Dave Rosoff at a CuratedCourses workshop in August 2018. It has the default (skinny) margins.  It was known to Euclid, and probably earlier, that the midpoints of the sides of any quadrilateral all lie in the same plane (even if the vertices of the quadrilateral do not). In fact, these midpoints are the vertices of a parallelogram, as pictured in .    The midpoints of the sides of a quadrilateral are the vertices of a parallelogram.       The sides of a triangle presented as vectors.       The medians of the triangle are , , and .       In this exercise, we'll use vectors to show that the medians of any triangle ( ) intersect at a point. Recall that medians are the lines connecting the vertices of the triangle to the midpoints of their opposite edges, as in the figure. We'll do this in a few steps.     What is the value of ?     from the previous page is reproduced for your convenience.   The medians of the triangle are , , and .        Show that .   Use .    To show that the point exists (as the common intersection of the ), show that .    If you have time, try to devise a vector proof of Euclid's result presented at the beginning of the workshop. Recall that a parallelogram is a four-sided polygon whose opposite sides are parallel.    Wrap-up  It's possible to do interesting things with vector arithmetic in a coordinate-free way: we didn't specify an origin, or any entries of any vectors in the examples.     Networks Worksheet    Basic laws for electrical circuits  This two-page worksheet was generously donated to the sample article by Virgil Pierce at a CuratedCourses workshop in August 2018. It has default (skinny) left and right margins, but we have specified longer top and bottom margins, with the top being the larger of the two.   Ohms Law  The current through a resistor is proportional to the ratio of the Voltage to the Resistance  Or for our purposes     Kirchoffs Current Law  The sum of the currents in a network meeting at a point is zero.     Kirchoff's Current Law  For the circuit below .       Kirchoffs Voltage Law  The sum of the voltages around any closed circuit (or subcircuit) is zero.    Kirchoffs Current Law and Kirkoffs Voltage Law combined with Ohms Law gives for any circuit of resistors and sources a linear system that may (or may not) determine the currents.        For the simple network pictured, calculuate the amperage in each part of the network by setting up a system of linear equations for the amperages.       Compare it with a parallel circuit network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.        Now for a more complicated network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.         Now generalize these ideas to a context outside of electrical circuits. Consider the network of streets given in the diagram (with one-way directions as indicated).     A traffic engineer counts the hourly flow of cars into and out of this network at the entrances. They get (EB = East Bound; WB = West Bound):   Estimated hourly traffic flow for the road network      EB Winooski  WB Winooski  Shelburne St  Willow  Jay    into  50  400  0  10  50    out of  55  390  20  15  30     Use a variable for each segment inside of the network and set up a system of linear equations restricting the flow. Solve the system. Note that you should not get a unique solution as traffic should be able to flow through the network in various ways.       This is a mock one-page worksheet for testing purposes. We have specified an overall margin just slightly less than the default.      Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.    Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    A two-line paragraph interspersed to check on spacing, breaks and all that.  A full-width exercise  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.   Another two-line paragraph interspersed to check on spacing, breaks and all that.    Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.    Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.     A Mock Activity   The problem, as we see it.    A worksheet could have hints, no? But no spacing. Note row below has widths set to balance the heights.      Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.    Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.    Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.       Dot products and projection     Let , , , . Find the values of the following expressions:  Are any of these vectors perpendicular to each other?   The vectors and are pictured below. Derive the formula for projection on a line and use it to find the projection of on the line spanned by . Also compute the length of the residual vector.   two vectors in a Cartesian plane         Consider the vector equation .  Check that there is no solution that makes the equation true. Use projection to find the best approximation . Compute . Compute the residual vector. Compute the length of the residual vector and explain what it means.   Consider the system of equations .  Write the system in vector form. Find the best estimate, , of using projection. Compute the length of the residual vector.     "
},
{
  "id": "objectives",
  "level": "2",
  "url": "section-worksheets.html#objectives",
  "type": "Objectives",
  "number": "33.1",
  "title": "",
  "body": "  Practice visualizing vector addition  Use vectors without explicit coordinates   "
},
{
  "id": "figure-midpoints-of-quadrilateral",
  "level": "2",
  "url": "section-worksheets.html#figure-midpoints-of-quadrilateral",
  "type": "Figure",
  "number": "33.1",
  "title": "",
  "body": " The midpoints of the sides of a quadrilateral are the vertices of a parallelogram.     "
},
{
  "id": "figure-triangle-cyclic-vectors",
  "level": "2",
  "url": "section-worksheets.html#figure-triangle-cyclic-vectors",
  "type": "Figure",
  "number": "33.2",
  "title": "",
  "body": " The sides of a triangle presented as vectors.     "
},
{
  "id": "figure-triangle-cyclic-medians",
  "level": "2",
  "url": "section-worksheets.html#figure-triangle-cyclic-medians",
  "type": "Figure",
  "number": "33.3",
  "title": "",
  "body": " The medians of the triangle are , , and .     "
},
{
  "id": "ex-cyclic",
  "level": "2",
  "url": "section-worksheets.html#ex-cyclic",
  "type": "Worksheet Exercise",
  "number": "33.1.1",
  "title": "",
  "body": " What is the value of ?  "
},
{
  "id": "figure-triangle-cyclic-medians-copy",
  "level": "2",
  "url": "section-worksheets.html#figure-triangle-cyclic-medians-copy",
  "type": "Figure",
  "number": "33.4",
  "title": "",
  "body": " The medians of the triangle are , , and .     "
},
{
  "id": "exercise-vector-addition",
  "level": "2",
  "url": "section-worksheets.html#exercise-vector-addition",
  "type": "Worksheet Exercise",
  "number": "33.1.2",
  "title": "",
  "body": " Show that .   Use .  "
},
{
  "id": "worksheet-geometric-prelude-5-3-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-geometric-prelude-5-3-2",
  "type": "Worksheet Exercise",
  "number": "33.1.3",
  "title": "",
  "body": " To show that the point exists (as the common intersection of the ), show that .  "
},
{
  "id": "worksheet-geometric-prelude-5-4",
  "level": "2",
  "url": "section-worksheets.html#worksheet-geometric-prelude-5-4",
  "type": "Worksheet Exercise",
  "number": "33.1.4",
  "title": "",
  "body": "If you have time, try to devise a vector proof of Euclid's result presented at the beginning of the workshop. Recall that a parallelogram is a four-sided polygon whose opposite sides are parallel. "
},
{
  "id": "worksheet-networks-2-3",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-2-3",
  "type": "Theorem",
  "number": "33.5",
  "title": "Ohms Law.",
  "body": " Ohms Law  The current through a resistor is proportional to the ratio of the Voltage to the Resistance  Or for our purposes   "
},
{
  "id": "worksheet-networks-2-4",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-2-4",
  "type": "Theorem",
  "number": "33.6",
  "title": "Kirchoffs Current Law.",
  "body": " Kirchoffs Current Law  The sum of the currents in a network meeting at a point is zero.   "
},
{
  "id": "worksheet-networks-2-5",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-2-5",
  "type": "Example",
  "number": "33.7",
  "title": "Kirchoff’s Current Law.",
  "body": " Kirchoff's Current Law  For the circuit below .     "
},
{
  "id": "worksheet-networks-2-6",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-2-6",
  "type": "Theorem",
  "number": "33.8",
  "title": "Kirchoffs Voltage Law.",
  "body": " Kirchoffs Voltage Law  The sum of the voltages around any closed circuit (or subcircuit) is zero.   "
},
{
  "id": "worksheet-networks-4-1-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-4-1-1",
  "type": "Worksheet Exercise",
  "number": "33.2.1",
  "title": "",
  "body": " For the simple network pictured, calculuate the amperage in each part of the network by setting up a system of linear equations for the amperages.     "
},
{
  "id": "worksheet-networks-4-1-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-4-1-2",
  "type": "Worksheet Exercise",
  "number": "33.2.2",
  "title": "",
  "body": " Compare it with a parallel circuit network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.     "
},
{
  "id": "worksheet-networks-4-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-4-2",
  "type": "Worksheet Exercise",
  "number": "33.2.3",
  "title": "",
  "body": " Now for a more complicated network. Calculate the amperage in each part of the network by setting up a system of linear equations for the amperages.     "
},
{
  "id": "worksheet-networks-5-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-networks-5-1",
  "type": "Worksheet Exercise",
  "number": "33.2.4",
  "title": "",
  "body": " Now generalize these ideas to a context outside of electrical circuits. Consider the network of streets given in the diagram (with one-way directions as indicated).     A traffic engineer counts the hourly flow of cars into and out of this network at the entrances. They get (EB = East Bound; WB = West Bound):   Estimated hourly traffic flow for the road network      EB Winooski  WB Winooski  Shelburne St  Willow  Jay    into  50  400  0  10  50    out of  55  390  20  15  30     Use a variable for each segment inside of the network and set up a system of linear equations restricting the flow. Solve the system. Note that you should not get a unique solution as traffic should be able to flow through the network in various ways.  "
},
{
  "id": "worksheet-testing-2-1-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-1-1",
  "type": "Worksheet Exercise",
  "number": "33.3.1",
  "title": "",
  "body": " Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  "
},
{
  "id": "worksheet-testing-2-1-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-1-2",
  "type": "Worksheet Exercise",
  "number": "33.3.2",
  "title": "",
  "body": " Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.  "
},
{
  "id": "worksheet-testing-2-3",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-3",
  "type": "Worksheet Exercise",
  "number": "33.3.3",
  "title": "A full-width exercise.",
  "body": "A full-width exercise  Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.  "
},
{
  "id": "worksheet-testing-2-5-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-5-1",
  "type": "Worksheet Exercise",
  "number": "33.3.4",
  "title": "",
  "body": " Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  "
},
{
  "id": "worksheet-testing-2-5-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-5-2",
  "type": "Worksheet Exercise",
  "number": "33.3.5",
  "title": "",
  "body": " Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.  "
},
{
  "id": "worksheet-testing-2-5-3",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-5-3",
  "type": "Worksheet Exercise",
  "number": "33.3.6",
  "title": "",
  "body": " Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  "
},
{
  "id": "worksheet-testing-2-6",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-6",
  "type": "Activity",
  "number": "33.1",
  "title": "A Mock Activity.",
  "body": " A Mock Activity   The problem, as we see it.    A worksheet could have hints, no? But no spacing. Note row below has widths set to balance the heights.   "
},
{
  "id": "worksheet-testing-2-7-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-7-1",
  "type": "Worksheet Exercise",
  "number": "33.3.7",
  "title": "",
  "body": " Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  "
},
{
  "id": "worksheet-testing-2-7-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-7-2",
  "type": "Worksheet Exercise",
  "number": "33.3.8",
  "title": "",
  "body": " Integer sagittis dictum turpis vel aliquet. Fusce ut suscipit dolor, nec tristique nisl. Aenean luctus, leo et ornare fermentum, nibh dui vulputate leo, nec tincidunt augue ipsum sed odio. Nunc non erat sollicitudin, iaculis eros consequat, dapibus eros.  "
},
{
  "id": "worksheet-testing-2-7-3",
  "level": "2",
  "url": "section-worksheets.html#worksheet-testing-2-7-3",
  "type": "Worksheet Exercise",
  "number": "33.3.9",
  "title": "",
  "body": " Praesent rutrum scelerisque felis sit amet adipiscing. Phasellus in mollis velit. Nunc malesuada felis sit amet massa cursus, eget elementum neque viverra.  "
},
{
  "id": "worksheet-dot-products-2-1-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-dot-products-2-1-1",
  "type": "Worksheet Exercise",
  "number": "33.4.1",
  "title": "",
  "body": " Let , , , . Find the values of the following expressions:  Are any of these vectors perpendicular to each other? "
},
{
  "id": "worksheet-dot-products-2-1-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-dot-products-2-1-2",
  "type": "Worksheet Exercise",
  "number": "33.4.2",
  "title": "",
  "body": " The vectors and are pictured below. Derive the formula for projection on a line and use it to find the projection of on the line spanned by . Also compute the length of the residual vector.   two vectors in a Cartesian plane   "
},
{
  "id": "worksheet-dot-products-3-1-1",
  "level": "2",
  "url": "section-worksheets.html#worksheet-dot-products-3-1-1",
  "type": "Worksheet Exercise",
  "number": "33.4.3",
  "title": "",
  "body": " Consider the vector equation .  Check that there is no solution that makes the equation true. Use projection to find the best approximation . Compute . Compute the residual vector. Compute the length of the residual vector and explain what it means. "
},
{
  "id": "worksheet-dot-products-3-1-2",
  "level": "2",
  "url": "section-worksheets.html#worksheet-dot-products-3-1-2",
  "type": "Worksheet Exercise",
  "number": "33.4.4",
  "title": "",
  "body": " Consider the system of equations .  Write the system in vector form. Find the best estimate, , of using projection. Compute the length of the residual vector. "
},
{
  "id": "section-exercises-single",
  "level": "1",
  "url": "section-exercises-single.html",
  "type": "Section",
  "number": "34",
  "title": "Exercises, One Subsection",
  "body": " Exercises, One Subsection  This <section> of the sample article demonstrates an unstructured division. There are no <subsection> , you are just reading the first two paragraphs, followed by some nonsense text. Then there is a single  <exercises> division. Note that this division is not numbered (since it is unique within the <section> ). And a cross-reference to one of the contained <exercise> will be numbered as a member of the <section> , .  If you use the unstructured form of a division, and have both inline and divisional exercises, there is a potential to form ambiguous cross-references. To wit, check that and are really different exercises (which you are unable to do if you are reading this in print!). The solution is to include the type of exercise in the reference, which will assist everybody, but especially your print readers: and .  Compare this section with the similar , next. The following text is mostly nonsense, just for testing purposes.  Inline One  Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.   Pellentesque nec condimentum ligula, quis interdum mauris. Ut sed urna lacinia, aliquam arcu id, faucibus nisi. Suspendisse potenti. Curabitur in erat ultricies, condimentum mi nec, vehicula mauris. Duis faucibus risus fermentum velit hendrerit, non laoreet massa maximus. Donec bibendum elit ac lectus lobortis luctus. Ut finibus, dolor ut euismod tristique, ligula tortor tempus arcu, finibus semper purus erat ut ligula. Aenean accumsan ut ante vel euismod.  Inline Two Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.   Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.   Inline Three  Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.    Exercise Collection  Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present     A side-by-side in a figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present and to test the numbering of the panels in a solutions manual    First Panel, subcaptioned     Second Panel, subcaptioned        First Panel, not subcaptioned     Second Panel, not subcaptioned      Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering, figure in a <exercise> in an un-numbered <exercises>     Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.   Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.    Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     More Reading   Left intentionally blank, just checking sectioning.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.   "
},
{
  "id": "section-exercises-single-5",
  "level": "2",
  "url": "section-exercises-single.html#section-exercises-single-5",
  "type": "Checkpoint",
  "number": "34.1",
  "title": "Inline One.",
  "body": "Inline One  Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.  "
},
{
  "id": "duplicate-inline",
  "level": "2",
  "url": "section-exercises-single.html#duplicate-inline",
  "type": "Checkpoint",
  "number": "34.2",
  "title": "Inline Two.",
  "body": "Inline Two Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis. "
},
{
  "id": "section-exercises-single-8",
  "level": "2",
  "url": "section-exercises-single.html#section-exercises-single-8",
  "type": "Theorem",
  "number": "34.3",
  "title": "Major Result.",
  "body": " Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.  "
},
{
  "id": "section-exercises-single-9",
  "level": "2",
  "url": "section-exercises-single.html#section-exercises-single-9",
  "type": "Checkpoint",
  "number": "34.4",
  "title": "Inline Three.",
  "body": "Inline Three  Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.  "
},
{
  "id": "exercise-collection-2",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-2",
  "type": "Exercise",
  "number": "34.1",
  "title": "Drill One.",
  "body": "Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present     A side-by-side in a figure in an <exercise> in an unstructured division to test that it is numbered as if the containing <exercises> is not present and to test the numbering of the panels in a solutions manual    First Panel, subcaptioned     Second Panel, subcaptioned        First Panel, not subcaptioned     Second Panel, not subcaptioned     "
},
{
  "id": "duplicate-divisional",
  "level": "2",
  "url": "section-exercises-single.html#duplicate-divisional",
  "type": "Exercise",
  "number": "34.2",
  "title": "Drill Two.",
  "body": "Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering, figure in a <exercise> in an un-numbered <exercises>    "
},
{
  "id": "exercise-collection-4",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-4",
  "type": "Exercise",
  "number": "34.3",
  "title": "Drill Three.",
  "body": "Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercise-challenging-one-unstructured",
  "level": "2",
  "url": "section-exercises-single.html#exercise-challenging-one-unstructured",
  "type": "Exercise",
  "number": "34.4",
  "title": "Challenging One.",
  "body": "Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "exercise-collection-6-2",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-6-2",
  "type": "Exercise",
  "number": "34.5",
  "title": "Challenging Two.",
  "body": "Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "exercise-collection-6-3",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-6-3",
  "type": "Exercise",
  "number": "34.6",
  "title": "Challenging Three.",
  "body": "Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercise-collection-7",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-7",
  "type": "Exercise",
  "number": "34.7",
  "title": "Impossible One.",
  "body": "Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "exercise-collection-8",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-8",
  "type": "Exercise",
  "number": "34.8",
  "title": "Impossible Two.",
  "body": "Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "exercise-collection-9",
  "level": "2",
  "url": "section-exercises-single.html#exercise-collection-9",
  "type": "Exercise",
  "number": "34.9",
  "title": "Impossible Three.",
  "body": "Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercises-structured",
  "level": "1",
  "url": "exercises-structured.html",
  "type": "Exercises",
  "number": "35",
  "title": "Exercise Section, Structured",
  "body": " Exercise Section, Structured   A collection of exercises, in a top-level <exercises> division, structured with <subexercises> .    Easy Exercises  Arithmetic  Compute .     Trigonometry  Compute .     Hard Problems  Number Theory  Prove Fermat's Last Theorem.   Millenial  Find general solutions to the Navier-Stokes equation.     With an Exercise Group    This is an exercise group, and this is its introduction.   One    Subtract.   Two     Outside exercisegroup, inside subexercises  6+5    "
},
{
  "id": "exercises-structured-3-2",
  "level": "2",
  "url": "exercises-structured.html#exercises-structured-3-2",
  "type": "Exercise",
  "number": "35.1",
  "title": "Arithmetic.",
  "body": "Arithmetic  Compute .    "
},
{
  "id": "exercises-structured-3-3",
  "level": "2",
  "url": "exercises-structured.html#exercises-structured-3-3",
  "type": "Exercise",
  "number": "35.2",
  "title": "Trigonometry.",
  "body": "Trigonometry  Compute .  "
},
{
  "id": "hard-subexercises-2",
  "level": "2",
  "url": "exercises-structured.html#hard-subexercises-2",
  "type": "Exercise",
  "number": "35.3",
  "title": "Number Theory.",
  "body": "Number Theory  Prove Fermat's Last Theorem.  "
},
{
  "id": "hard-subexercises-3",
  "level": "2",
  "url": "exercises-structured.html#hard-subexercises-3",
  "type": "Exercise",
  "number": "35.4",
  "title": "Millenial.",
  "body": "Millenial  Find general solutions to the Navier-Stokes equation.  "
},
{
  "id": "exercises-structured-5-2-2",
  "level": "2",
  "url": "exercises-structured.html#exercises-structured-5-2-2",
  "type": "Exercise",
  "number": "35.5",
  "title": "One.",
  "body": "One    Subtract.  "
},
{
  "id": "exercises-structured-5-2-3",
  "level": "2",
  "url": "exercises-structured.html#exercises-structured-5-2-3",
  "type": "Exercise",
  "number": "35.6",
  "title": "Two.",
  "body": "Two   "
},
{
  "id": "exercises-structured-5-3",
  "level": "2",
  "url": "exercises-structured.html#exercises-structured-5-3",
  "type": "Exercise",
  "number": "35.7",
  "title": "Outside exercisegroup, inside subexercises.",
  "body": "Outside exercisegroup, inside subexercises  6+5  "
},
{
  "id": "section-exercises-multiple",
  "level": "1",
  "url": "section-exercises-multiple.html",
  "type": "Section",
  "number": "36",
  "title": "Exercises, Multiple Subsections",
  "body": " Exercises, Multiple Subsections   This <section> of the sample article demonstrates a structured division. You are reading the introduction to the division, then there is a faux <subsection> , followed by three <exercises> divisions. Note that the three are numbered as if they are also fellow <subsection> . And a cross-reference to one of the contained <exercise> will be numbered use the number of the <subsection> , .  Compare this section with the similar , previous. The following text is mostly nonsense, just for testing purposes.    Faux Subsection  Inline One  Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.   Pellentesque nec condimentum ligula, quis interdum mauris. Ut sed urna lacinia, aliquam arcu id, faucibus nisi. Suspendisse potenti. Curabitur in erat ultricies, condimentum mi nec, vehicula mauris. Duis faucibus risus fermentum velit hendrerit, non laoreet massa maximus. Donec bibendum elit ac lectus lobortis luctus. Ut finibus, dolor ut euismod tristique, ligula tortor tempus arcu, finibus semper purus erat ut ligula. Aenean accumsan ut ante vel euismod.  Inline Two  Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.    Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.   Inline Three  Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.     Drill Exercises  Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in a structured division to test that it is numbered with consideration of the containing <exercises>     Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     Challenging Exercises  Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.   Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.      Impossible Exercises  Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.     More Reading   Left intentionally blank, just checking sectioning.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.   "
},
{
  "id": "section-exercises-multiple-3-2",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-3-2",
  "type": "Checkpoint",
  "number": "36.1",
  "title": "Inline One.",
  "body": "Inline One  Aliquam vitae risus placerat, pellentesque leo vitae, iaculis ante. Praesent ac odio eget mi bibendum eleifend ac eget metus. Morbi in dolor et diam accumsan mattis. Aenean elementum pulvinar efficitur. Etiam viverra ut tellus quis consequat. Phasellus sit amet nisl a ligula pharetra tempus id in elit. Maecenas congue quam eu purus fermentum pretium. Fusce pellentesque ultricies arcu, egestas sollicitudin erat condimentum non. Integer non velit at dolor dictum aliquam et rhoncus mauris. Sed nec nibh id nunc convallis tincidunt ut at ligula. Etiam elementum nisl eu erat dapibus rhoncus.  "
},
{
  "id": "section-exercises-multiple-3-4",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-3-4",
  "type": "Checkpoint",
  "number": "36.2",
  "title": "Inline Two.",
  "body": "Inline Two  Ut porttitor neque a pharetra euismod. Vivamus ut metus pretium, placerat massa tempor, condimentum metus. Phasellus vestibulum iaculis turpis non posuere. Vestibulum quis aliquet neque. Donec nec metus iaculis, laoreet massa vitae, suscipit tellus. Etiam et ultrices quam, quis pretium ligula. In ut cursus metus. Aenean volutpat quam odio, quis tempus dolor egestas eget. Nunc fringilla lobortis nunc, ut interdum lorem posuere sed. Sed sodales risus a laoreet venenatis. Nunc sodales tempor mollis. Nam sollicitudin velit sed ex viverra feugiat. Nunc consectetur mi vitae urna sollicitudin malesuada. Fusce eget risus lectus. Mauris augue velit, vestibulum vitae tempus sit amet, porttitor eget turpis.  "
},
{
  "id": "section-exercises-multiple-3-5",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-3-5",
  "type": "Theorem",
  "number": "36.3",
  "title": "Major Result.",
  "body": " Major Result  Vivamus tortor tortor, lobortis et sem vel, accumsan placerat libero. Sed eget metus non magna accumsan efficitur a non turpis. Curabitur maximus arcu ipsum, eget vestibulum nulla mollis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel eleifend risus. Morbi hendrerit tellus eget nibh imperdiet, ac mollis nisl sagittis. Ut commodo pharetra leo. Suspendisse consequat velit eget velit condimentum feugiat.  "
},
{
  "id": "exercise-duplicate-inline",
  "level": "2",
  "url": "section-exercises-multiple.html#exercise-duplicate-inline",
  "type": "Checkpoint",
  "number": "36.4",
  "title": "Inline Three.",
  "body": "Inline Three  Suspendisse lacinia mattis risus, eget viverra urna dictum eu. Maecenas ut sem in turpis egestas varius nec at ipsum. Praesent bibendum nisi et turpis congue, a pellentesque felis tempor. Vivamus non dolor in risus interdum mattis. In tempus iaculis velit, sit amet rhoncus tellus aliquam convallis. Sed ut tellus id ipsum blandit convallis sed eget tortor. Nunc leo felis, scelerisque vel ante porta, volutpat rhoncus neque. Mauris convallis, felis at aliquam aliquet, felis ipsum semper mi, vitae auctor purus ante non erat. Ut nec felis mi.  "
},
{
  "id": "exercises-drill-2",
  "level": "2",
  "url": "section-exercises-multiple.html#exercises-drill-2",
  "type": "Exercise",
  "number": "36.2.1",
  "title": "Drill One.",
  "body": "Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   A figure in an <exercise> in a structured division to test that it is numbered with consideration of the containing <exercises>    "
},
{
  "id": "exercises-drill-3",
  "level": "2",
  "url": "section-exercises-multiple.html#exercises-drill-3",
  "type": "Exercise",
  "number": "36.2.2",
  "title": "Drill Two.",
  "body": "Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "exercises-drill-4",
  "level": "2",
  "url": "section-exercises-multiple.html#exercises-drill-4",
  "type": "Exercise",
  "number": "36.2.3",
  "title": "Drill Three.",
  "body": "Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercise-challenging-one-structured",
  "level": "2",
  "url": "section-exercises-multiple.html#exercise-challenging-one-structured",
  "type": "Exercise",
  "number": "36.3.1",
  "title": "Challenging One.",
  "body": "Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "section-exercises-multiple-5-3-2",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-5-3-2",
  "type": "Exercise",
  "number": "36.3.2",
  "title": "Challenging Two.",
  "body": "Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "section-exercises-multiple-5-3-3",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-5-3-3",
  "type": "Exercise",
  "number": "36.3.3",
  "title": "Challenging Three.",
  "body": "Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "section-exercises-multiple-6-2",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-6-2",
  "type": "Exercise",
  "number": "36.4.1",
  "title": "Impossible One.",
  "body": "Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "section-exercises-multiple-6-3",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-6-3",
  "type": "Exercise",
  "number": "36.4.2",
  "title": "Impossible Two.",
  "body": "Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "section-exercises-multiple-6-4",
  "level": "2",
  "url": "section-exercises-multiple.html#section-exercises-multiple-6-4",
  "type": "Exercise",
  "number": "36.4.3",
  "title": "Impossible Three.",
  "body": "Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercises-top-level",
  "level": "1",
  "url": "exercises-top-level.html",
  "type": "Exercises",
  "number": "37",
  "title": "Exercises, Top-Level",
  "body": " Exercises, Top-Level    This <exercises> of the sample article is a peer of all the preceding <section> and is the only such <exercises> . As such, it is not numbered, and contains only <exercise> , but for this <introduction> you are reading. The <exercises> contained within will be numbered in cross-references according to the enclosing division, in this case the entire article and so without any qualification, to wit, .   Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering in a <exercises> without a number     Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.     An introduction to an exercisegroup . This is here to attempt to interrupt the flow of the counting from this division to the next.   Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.    Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.   Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.   An Exercise in a Section  Exercises can appear in a section of their own. You need to give the section a title, even if it seems obvious what to call it. Individual exercises may have titles, as you choose. Problem: How should we hide solutions?   Maybe a global switch should be used to suppress solutions, while a separate processing regime could use them as part of a solutions manual.   An Exercise with a Hard-Coded Problem Number  Compute the definite integral , not as an approximate value from a Riemann sum, but as an exact value based of the limit by using the Fundamental Theorem.   An antiderivative of is , so by the FTC, !?! This is indeed an exciting result, but we are mostly interested in seeing that the sentence-ending punctuation is absorbed properly into the displayed equation.    Can you prove Corollary directly? If not consider that a problem could have several parts, which should be formatted as a second-level list, since the problems normally get numbered at the top level.  Why is this result a Corollary?  Could you interchange the Theorem and Corollary?    MVT  Consider the definite integral as an area function and employ the Mean Value Theorem.   Motivator  Think harder!   Helpful   It follows easily.  Yes.    We could prove either result first, then obtain the other as an easy consequence.   "
},
{
  "id": "exercises-top-level-3",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-3",
  "type": "Exercise",
  "number": "37.1",
  "title": "Drill One.",
  "body": "Drill One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "exercises-top-level-4",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-4",
  "type": "Exercise",
  "number": "37.2",
  "title": "Drill Two.",
  "body": "Drill Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.   Testing numbering in a <exercises> without a number    "
},
{
  "id": "exercises-top-level-5",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-5",
  "type": "Exercise",
  "number": "37.3",
  "title": "Drill Three.",
  "body": "Drill Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercise-challenging-one-top",
  "level": "2",
  "url": "exercises-top-level.html#exercise-challenging-one-top",
  "type": "Exercise",
  "number": "37.4",
  "title": "Challenging One.",
  "body": "Challenging One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "exercises-top-level-7-2",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-7-2",
  "type": "Exercise",
  "number": "37.5",
  "title": "Challenging Two.",
  "body": "Challenging Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh.  Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "exercises-top-level-7-3",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-7-3",
  "type": "Exercise",
  "number": "37.6",
  "title": "Challenging Three.",
  "body": "Challenging Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercises-top-level-8",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-8",
  "type": "Exercise",
  "number": "37.7",
  "title": "Impossible One.",
  "body": "Impossible One  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue urna nulla. Aliquam eget euismod tellus. Maecenas nibh libero, venenatis a laoreet in, tempor sit amet sem. Morbi sit amet justo tempor velit auctor placerat. Maecenas nec lobortis orci. Aenean dictum enim lacus, ac blandit lacus elementum nec. Mauris porttitor neque volutpat tincidunt sollicitudin. Cras porta lectus ac facilisis tempor. Suspendisse in velit nisl. Sed convallis leo at nunc aliquet fermentum. Pellentesque feugiat at ex sed elementum. In porta vulputate ipsum sit amet consectetur.  "
},
{
  "id": "exercises-top-level-9",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-9",
  "type": "Exercise",
  "number": "37.8",
  "title": "Impossible Two.",
  "body": "Impossible Two  Aliquam sagittis ex at magna porttitor, quis scelerisque ligula malesuada. Vestibulum vitae mauris id nisi pretium ornare a id lectus. Nam suscipit magna id sem ultricies vestibulum. Nulla facilisi. Duis venenatis lectus massa, ac mollis nisi suscipit non. Sed et sapien vulputate, imperdiet nibh vel, lobortis nisl. Curabitur sagittis justo nibh. Nulla vulputate sodales justo at efficitur. Cras justo augue, mollis vitae nulla sed, vestibulum tincidunt ante. Vestibulum et lorem lectus. Maecenas accumsan lacus a nisi euismod rutrum eu dapibus justo. Etiam scelerisque a odio a euismod. Pellentesque vestibulum pellentesque nisi, a tempus erat cursus ac. Morbi ut auctor lectus.  "
},
{
  "id": "exercises-top-level-10",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-10",
  "type": "Exercise",
  "number": "37.9",
  "title": "Impossible Three.",
  "body": "Impossible Three  Nam congue ex nec justo iaculis maximus. Vestibulum lobortis magna sed urna auctor, vel dignissim massa posuere. In sed venenatis elit. Vivamus congue gravida tempus. Nunc quis fermentum nisi. Nullam hendrerit lorem et tellus semper, sit amet scelerisque purus lobortis. Quisque sollicitudin quis neque eu suscipit. Praesent volutpat justo quis magna vehicula molestie.  "
},
{
  "id": "exercises-top-level-11",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-11",
  "type": "Exercise",
  "number": "37.10",
  "title": "An Exercise in a Section.",
  "body": "An Exercise in a Section  Exercises can appear in a section of their own. You need to give the section a title, even if it seems obvious what to call it. Individual exercises may have titles, as you choose. Problem: How should we hide solutions?   Maybe a global switch should be used to suppress solutions, while a separate processing regime could use them as part of a solutions manual.  "
},
{
  "id": "exercise-with-hardcoded-number",
  "level": "2",
  "url": "exercises-top-level.html#exercise-with-hardcoded-number",
  "type": "Exercise",
  "number": "37.42a",
  "title": "An Exercise with a Hard-Coded Problem Number.",
  "body": "An Exercise with a Hard-Coded Problem Number  Compute the definite integral , not as an approximate value from a Riemann sum, but as an exact value based of the limit by using the Fundamental Theorem.   An antiderivative of is , so by the FTC, !?! This is indeed an exciting result, but we are mostly interested in seeing that the sentence-ending punctuation is absorbed properly into the displayed equation.  "
},
{
  "id": "exercises-top-level-13",
  "level": "2",
  "url": "exercises-top-level.html#exercises-top-level-13",
  "type": "Exercise",
  "number": "37.12",
  "title": "",
  "body": " Can you prove Corollary directly? If not consider that a problem could have several parts, which should be formatted as a second-level list, since the problems normally get numbered at the top level.  Why is this result a Corollary?  Could you interchange the Theorem and Corollary?    MVT  Consider the definite integral as an area function and employ the Mean Value Theorem.   Motivator  Think harder!   Helpful   It follows easily.  Yes.    We could prove either result first, then obtain the other as an easy consequence.  "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.   This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.  This is some notation introduced in the article. PreTeXt allows the notation list generator anywhere, so we have this paragraph to test spacing above and below the table. We'll say that again.  "
},
{
  "id": "solutions-backmatter",
  "level": "1",
  "url": "solutions-backmatter.html",
  "type": "Appendix",
  "number": "B",
  "title": "Solutions to Selected Exercises",
  "body": " Solutions to Selected Exercises  solutions as an appendix   This is an introduction, where you might explain that this division of the back matter contains various hints, answers, solutions of inline exercises, divisional exercises, project-like blocks, worksheet exercises, and\/or reading questions. See the source to see just how this solutions division was built.     And a conclusion to this solutions division, which may not be readily apparent as distinct from the final division's worth of solutions, but since it is not prefixed with a number, it may be different enough.   "
},
{
  "id": "solutions-single-exercises",
  "level": "1",
  "url": "solutions-single-exercises.html",
  "type": "Appendix",
  "number": "C",
  "title": "Solutions to a Single Exercises Division",
  "body": " Solutions to a Single Exercises Division  solutions for one group of exercises   Sometimes you may want the solutions to exercises within a single <exercises> division (or similar, like a <worksheet> ). Default behavior in this situation can produce two titles, when just one would be sufficient. Here we have used the scope attribute to point to a specific <exercises> , and provided a (single) very specific <title> .    "
},
{
  "id": "solutions-answers",
  "level": "1",
  "url": "solutions-answers.html",
  "type": "Appendix",
  "number": "D",
  "title": "All Solutions that are Answers",
  "body": " All Solutions that are Answers  solutions all answers   The back matter solutions appendix requests every <answer> , and only <answer> , of all types of exercises: inline, divisional, worksheet, reading questions, and projects. Now, as observed by Bruce Yoshiwara, it gets a bit tedious to see the Answer heading over and over in print, when every entry has that heading. So we squelch it for you in print\/PDF output. (For HTML output we use knowls and need to have something to click on. But perhaps for EPUB we should be more careful?) Note that you might want to use a <title> , or an <introduction> , that explains which component of the exercises is being displayed, so there is no confusion.    "
},
{
  "id": "solutions-odd-answers",
  "level": "1",
  "url": "solutions-odd-answers.html",
  "type": "Appendix",
  "number": "E",
  "title": "All Solutions that are Answers to Odd Exercises",
  "body": " All Solutions that are Answers to Odd Exercises  solutions all even answers   This should be identical to the previous collection of answers, except only exercises with an even number are reported (via the admit attribute).    "
},
{
  "id": "appendix-results",
  "level": "1",
  "url": "appendix-results.html",
  "type": "Appendix",
  "number": "F",
  "title": "List of Results",
  "body": " List of Results  We had an automatic list of theorems for just one section, back in . Here we expand to include corollary in our space-delimited list of elements and we request divisions (headings) at each subsection and section . The default scope is the entire document, which is appropriate here in the backmatter. There are many subsections with no results, so we set the empty attribute to no to suppress them, though this is the default behavior ( yes being the other option to see divisions with no list items). These lists are most valuable if you are in the practice of giving items titles.   "
},
{
  "id": "appendix-exercise-lists",
  "level": "1",
  "url": "appendix-exercise-lists.html",
  "type": "Appendix",
  "number": "G",
  "title": "Lists of Exercises",
  "body": " Lists of Exercises  Since <exercise> come in several flavors, we use pseudo-elements to specify the distinct types. There are not many reading questions but here is a list of all of them, by section, using a readingquestion pseudo-element.   And now a list of all the inline exercises, and including the title of every <section> , even if there is no inline exercise contained inside it. The pseudo-element is inlineexercise .   "
},
{
  "id": "appendix-exercise-lists-2",
  "level": "2",
  "url": "appendix-exercise-lists.html#appendix-exercise-lists-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pseudo-elements "
},
{
  "id": "appendix-structured",
  "level": "1",
  "url": "appendix-structured.html",
  "type": "Appendix",
  "number": "H",
  "title": "A Structured Appendix",
  "body": " A Structured Appendix  A deeply-structured appendix for testing purposes.   A Subsection in an Appendix  Inside a subsection.   A Subsubsection in a Subsection in an Appendix  Nearly terminal.   Paragraphs in a Subsubsection in a Subsection in an Appendix  The paragraphs element can go in any division, but does not get a number.     "
},
{
  "id": "appendix-index",
  "level": "1",
  "url": "appendix-index.html",
  "type": "Appendix",
  "number": "I",
  "title": "Index",
  "body": " Index  There is an index manufactured at the end of the back matter. So we are talking about it here, rather than within the index, which is an impossibility. It contains some sample entries, and is not meant to be comprehensive. Look at the source of this XML file, searching on <idx> , to see how they are written. They may be placed inside of a a variety of structures, and their location greatly influences the cross-references produced in the HTML version of the index.  The latex version of the index is more traditional, using page numbers to reference locations. A newer package is used to create the index, and so there is no extra intermediate step required to process the index. The one downside of this convenience is that index entries may not be placed in the back colophon (which is the only subdivision that may follow the index).  There is an index entry about multicolumn lists which spans more than one page. This requires doubly-linked index entries, the first has the index content and points to the xml:id of the second. The second is an empty element, but points back to the xml:id of the first entry. So each has a marker and a reference, which allows the span of the index topic to cut across XML boundaries in the source. This is the mechanism to produce a page range in the latex index. See the source of this article for syntax details.   Bully Pulpit: Index Headings  Professionals do not capitalize the headings (entries) of an index, unless it is a proper noun (name, place, ). We do not provide any enforcement of this advice, nor any assistance. It is your responsibility to provide quality source material in this regard.    Note  Most all of the index entries below to page 2 (PDF output) are just from a suite of non-sensical tests. These are harder to recognize in the HTML output.   "
},
{
  "id": "glossary-backmatter",
  "level": "1",
  "url": "glossary-backmatter.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": " glossary   A glossary may have a <headnote> , perhaps with some explanation. This glossary is placed in the back matter. Placement as a specialized division is another option, see .    bar  A part of foobar . See .    foobar  A synonym for the acronym FUBAR .   "
},
{
  "id": "glossary-backmatter-3-2",
  "level": "2",
  "url": "glossary-backmatter.html#glossary-backmatter-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "foobar "
},
{
  "id": "appendix-multiple-references",
  "level": "1",
  "url": "appendix-multiple-references.html",
  "type": "Appendix",
  "number": "J",
  "title": "Multiple References",
  "body": " Multiple References   Multiple Specialized References  You might want to have lists of references, in the back, but with multiple such lists. Make an <appendix> to hold them, give it some structure (for an <article> , a leading <subsection> , such as the one you are reading right now), then follow with multiple <references> divisions. A typical citation will then look like: .    General References  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.    Specialized References  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.   "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Tom Judson, Abstract Algebra: Theory and Applications . Another online, open-source offering.   David C. Lay, Subspaces and Echelon Forms . The College Mathematics Journal , January 1993, 24  1 , 57 62.  "
},
{
  "id": "note-judson-AATA",
  "level": "2",
  "url": "references-backmatter.html#note-judson-AATA",
  "type": "Note",
  "number": "1.1",
  "title": "",
  "body": "Another online, open-source offering. "
},
{
  "id": "the-index",
  "level": "1",
  "url": "the-index.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-back",
  "level": "1",
  "url": "colophon-back.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This article was authored in, and produced with, PreTeXt . It is typeset with the Latin Modern font.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
