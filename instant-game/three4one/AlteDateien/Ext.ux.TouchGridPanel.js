
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <script type="text/javascript">var NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
        <title>Ext.ux.TouchGridPanel.js at master from mitchellsimoens/Ext.ux.TouchGridPanel - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://a248.e.akamai.net/assets.github.com/66aaf3d4b284bb22abf5881cfb27cd271aff5d56/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://a248.e.akamai.net/assets.github.com'
      }
      var github_user = null
      
    </script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/jquery/jquery-1.6.1.min.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/b5b6f64f5d8dda0762bb9050e902376067c55746/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "mitchellsimoens/Ext.ux.TouchGridPanel"
      })
    </script>

    
  <link rel='canonical' href='/mitchellsimoens/Ext.ux.TouchGridPanel/blob/aa958767970740869c48dc35a7ad435a2221ae96/Ext.ux.TouchGridPanel.js'>

  <link href="https://github.com/mitchellsimoens/Ext.ux.TouchGridPanel/commits/master.atom" rel="alternate" title="Recent Commits to Ext.ux.TouchGridPanel:master" type="application/atom+xml" />

        <meta name="description" content="Ext.ux.TouchGridPanel - A GridPanel extension based on ExtJS for Sencha Touch" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "mitchellsimoens/Ext.ux.TouchGridPanel";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "aa958767970740869c48dc35a7ad435a2221ae96";
      GitHub.currentPath = 'Ext.ux.TouchGridPanel.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out page-blob windows env-production">
    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            
            <img alt="github" class="default" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov5.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov5-hover.png" />
            <!--<![endif]-->
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      
      <li class="blog"><a href="/blog">Blog</a></li>
      
      <li class="login"><a href="/login?return_to=%2Fmitchellsimoens%2FExt.ux.TouchGridPanel%2Fblob%2Fmaster%2FExt.ux.TouchGridPanel.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/mitchellsimoens">mitchellsimoens</a> / <strong><a href="/mitchellsimoens/Ext.ux.TouchGridPanel">Ext.ux.TouchGridPanel</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '094341dc02f206e2a2481ae818fcdc95a33b6ebb'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '094341dc02f206e2a2481ae818fcdc95a33b6ebb'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '094341dc02f206e2a2481ae818fcdc95a33b6ebb'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/watchers" title="Watchers" class="tooltipped downwards">21</a></li>
          <li class="forks"><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/network" title="Forks" class="tooltipped downwards">1</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/network" highlight="repo_network">Network</a></li>
    <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/pulls" highlight="repo_pulls">Pull Requests (0)</a></li>

    

    
      
      <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/issues" highlight="issues">Issues (0)</a></li>
    

            
    <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/branches" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>A GridPanel extension based on ExtJS for Sencha Touch
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/mitchellsimoens/Ext.ux.TouchGridPanel/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="094341dc02f206e2a2481ae818fcdc95a33b6ebb" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="A GridPanel extension based on ExtJS for Sencha Touch">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://www.simoens.org/Sencha-Projects/demos/" rel="nofollow">http://www.simoens.org/Sencha-Projects/demos/</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/mitchellsimoens/Ext.ux.TouchGridPanel/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="094341dc02f206e2a2481ae818fcdc95a33b6ebb" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://www.simoens.org/Sencha-Projects/demos/">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
      <div id="url_box" class="url-box">
  

  <ul class="clone-urls">
    
      
      <li id="http_clone_url"><a href="https://github.com/mitchellsimoens/Ext.ux.TouchGridPanel.git" data-permissions="Read-Only">HTTP</a></li>
      <li id="public_clone_url"><a href="git://github.com/mitchellsimoens/Ext.ux.TouchGridPanel.git" data-permissions="Read-Only">Git Read-Only</a></li>
    
    
  </ul>
  <input type="text" spellcheck="false" id="url_field" class="url-field" />
        <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

  <p id="url_description"><strong>Read+Write</strong> access</p>
</div>

    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/mitchellsimoens/Ext.ux.TouchGridPanel">Ext.ux.TouchGridPanel</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  







<script type="text/javascript">
  GitHub.downloadRepo = '/mitchellsimoens/Ext.ux.TouchGridPanel/archives/master'
  GitHub.revType = "master"

  GitHub.repoName = "Ext.ux.TouchGridPanel"
  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.loggedIn = false
  

  
</script>




<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/commit/aa958767970740869c48dc35a7ad435a2221ae96">Changed license, added some funcitons, added dirt record CSS rule</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/05c3098aa8b53f0ed43a2a4377baa9bd?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/mitchellsimoens">mitchellsimoens</a> <span>(author)</span></div>
        <div class="date">
          <time class="js-relative-date" datetime="2011-03-22T13:00:37-07:00" title="2011-03-22 13:00:37">March 22, 2011</time>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/mitchellsimoens/Ext.ux.TouchGridPanel/commit/aa958767970740869c48dc35a7ad435a2221ae96" hotkey="c">aa958767970740869c48</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/mitchellsimoens/Ext.ux.TouchGridPanel/tree/aa958767970740869c48dc35a7ad435a2221ae96" hotkey="t">b80c7528b71a70aa067c</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/mitchellsimoens/Ext.ux.TouchGridPanel/tree/d505e9e416c42620cb041c33e6dc5af9497cc239" hotkey="p">d505e9e416c42620cb04</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="Ext.ux.TouchGridPanel.js/">
      <b><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/tree/aa958767970740869c48dc35a7ad435a2221ae96">Ext.ux.TouchGridPanel</a></b> / Ext.ux.TouchGridPanel.js       <span style="display:none" id="clippy_444">Ext.ux.TouchGridPanel.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_444&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_444&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="Ext.ux.TouchGridPanel.js/" data-canonical-url="/mitchellsimoens/Ext.ux.TouchGridPanel/blob/aa958767970740869c48dc35a7ad435a2221ae96/Ext.ux.TouchGridPanel.js">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/mitchellsimoens/Ext.ux.TouchGridPanel/edit/__current_ref__/Ext.ux.TouchGridPanel.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100755</span>
                
                  <span>294 lines (234 sloc)</span>
                
                <span>6.505 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/raw/master/Ext.ux.TouchGridPanel.js" id="raw-url">raw</a></li>
                
                  <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/blame/master/Ext.ux.TouchGridPanel.js">blame</a></li>
                
                <li><a href="/mitchellsimoens/Ext.ux.TouchGridPanel/commits/master/Ext.ux.TouchGridPanel.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Because of limitation of the current WebKit implementation of CSS3 column layout,</span></div><div class='line' id='LC3'><span class="cm"> * I have decided to revert back to using table.</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="nx">Ext</span><span class="p">.</span><span class="nx">ns</span><span class="p">(</span><span class="s2">&quot;Ext.ux&quot;</span><span class="p">);</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="nx">Ext</span><span class="p">.</span><span class="nx">ux</span><span class="p">.</span><span class="nx">TouchGridPanel</span> <span class="o">=</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Ext</span><span class="p">.</span><span class="nx">Panel</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC9'>	<span class="nx">layout</span>        <span class="o">:</span> <span class="s2">&quot;fit&quot;</span><span class="p">,</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>	<span class="nx">multiSelect</span>   <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC12'>	<span class="nx">scroll</span>        <span class="o">:</span> <span class="s2">&quot;vertical&quot;</span><span class="p">,</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>	<span class="nx">initComponent</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC15'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="nx">me</span><span class="p">.</span><span class="nx">items</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">dataview</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">buildDataView</span><span class="p">();</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Ext</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">me</span><span class="p">.</span><span class="nx">dockedItems</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC20'>			<span class="nx">me</span><span class="p">.</span><span class="nx">dockedItems</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC21'>		<span class="p">}</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>		<span class="nx">me</span><span class="p">.</span><span class="nx">header</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">Component</span><span class="p">(</span><span class="nx">me</span><span class="p">.</span><span class="nx">buildHeader</span><span class="p">());</span></div><div class='line' id='LC24'>		<span class="nx">me</span><span class="p">.</span><span class="nx">dockedItems</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">me</span><span class="p">.</span><span class="nx">header</span><span class="p">);</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>		<span class="nx">Ext</span><span class="p">.</span><span class="nx">ux</span><span class="p">.</span><span class="nx">TouchGridPanel</span><span class="p">.</span><span class="nx">superclass</span><span class="p">.</span><span class="nx">initComponent</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">me</span><span class="p">);</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">store</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>		<span class="nx">store</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;update&quot;</span><span class="p">,</span> <span class="nx">me</span><span class="p">.</span><span class="nx">dispatchDataChanged</span><span class="p">,</span> <span class="nx">me</span><span class="p">);</span></div><div class='line' id='LC31'>	<span class="p">},</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>	<span class="nx">dispatchDataChanged</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">store</span><span class="p">,</span> <span class="nx">rec</span><span class="p">,</span> <span class="nx">operation</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>		<span class="nx">me</span><span class="p">.</span><span class="nx">fireEvent</span><span class="p">(</span><span class="s2">&quot;storeupdate&quot;</span><span class="p">,</span> <span class="nx">store</span><span class="p">,</span> <span class="nx">rec</span><span class="p">,</span> <span class="nx">operation</span><span class="p">);</span></div><div class='line' id='LC37'>	<span class="p">},</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	<span class="nx">buildHeader</span>   <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC40'>		<span class="kd">var</span> <span class="nx">me</span>        <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC41'>			<span class="nx">colModel</span>  <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">,</span></div><div class='line' id='LC42'>			<span class="nx">colNum</span>    <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getColNum</span><span class="p">(</span><span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC43'>			<span class="nx">cellWidth</span> <span class="o">=</span> <span class="mi">100</span><span class="o">/</span><span class="nx">colNum</span><span class="p">,</span></div><div class='line' id='LC44'>			<span class="nx">colTpl</span>    <span class="o">=</span> <span class="s1">&#39;&lt;table class=&quot;x-grid-header&quot;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>		<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;    &lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC47'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>			<span class="kd">var</span> <span class="nx">col</span>  <span class="o">=</span> <span class="nx">colModel</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span></div><div class='line' id='LC49'>				<span class="nx">flex</span> <span class="o">=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">flex</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC50'>				<span class="nx">cls</span>  <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>			<span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">flex</span> <span class="o">*</span> <span class="nx">cellWidth</span><span class="p">;</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>			<span class="k">if</span> <span class="p">(</span><span class="nx">col</span><span class="p">.</span><span class="nx">hidden</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>				<span class="nx">cls</span> <span class="o">+=</span> <span class="s2">&quot;x-grid-col-hidden&quot;</span><span class="p">;</span></div><div class='line' id='LC56'>			<span class="p">}</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'>			<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td width=&quot;&#39;</span> <span class="o">+</span> <span class="nx">width</span> <span class="o">+</span> <span class="s1">&#39;%&quot; class=&quot;x-grid-cell x-grid-hd-cell x-grid-col-&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">mapping</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">cls</span> <span class="o">+</span> <span class="s1">&#39;&quot; mapping=&quot;&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">mapping</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">header</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC59'>		<span class="p">}</span></div><div class='line' id='LC60'>		<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;    &lt;/tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC61'>		<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/table&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC64'>			<span class="nx">dock</span>      <span class="o">:</span> <span class="s2">&quot;top&quot;</span><span class="p">,</span></div><div class='line' id='LC65'>			<span class="nx">html</span>      <span class="o">:</span> <span class="nx">colTpl</span><span class="p">,</span></div><div class='line' id='LC66'>			<span class="nx">listeners</span> <span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC67'>				<span class="nx">scope</span>       <span class="o">:</span> <span class="nx">me</span><span class="p">,</span></div><div class='line' id='LC68'>				<span class="nx">afterrender</span> <span class="o">:</span> <span class="nx">me</span><span class="p">.</span><span class="nx">initHeaderEvents</span></div><div class='line' id='LC69'>			<span class="p">}</span></div><div class='line' id='LC70'>		<span class="p">};</span></div><div class='line' id='LC71'>	<span class="p">},</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="nx">initHeaderEvents</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cmp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC75'>			<span class="nx">el</span> <span class="o">=</span> <span class="nx">cmp</span><span class="p">.</span><span class="nx">getEl</span><span class="p">();</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>		<span class="nx">el</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="nx">me</span><span class="p">.</span><span class="nx">handleHeaderClick</span><span class="p">,</span> <span class="nx">me</span><span class="p">);</span></div><div class='line' id='LC78'>	<span class="p">},</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>	<span class="nx">handleHeaderClick</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>		<span class="nx">e</span><span class="p">.</span><span class="nx">stopEvent</span><span class="p">();</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>		<span class="kd">var</span> <span class="nx">me</span>      <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC84'>			<span class="nx">el</span>      <span class="o">=</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">t</span><span class="p">),</span></div><div class='line' id='LC85'>			<span class="nx">mapping</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;mapping&quot;</span><span class="p">);</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">mapping</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>			<span class="nx">me</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">mapping</span><span class="p">);</span></div><div class='line' id='LC89'>			<span class="nx">el</span><span class="p">.</span><span class="nx">set</span><span class="p">({</span></div><div class='line' id='LC90'>				<span class="nx">sort</span> <span class="o">:</span> <span class="nx">me</span><span class="p">.</span><span class="nx">store</span><span class="p">.</span><span class="nx">sortToggle</span><span class="p">[</span><span class="nx">mapping</span><span class="p">]</span></div><div class='line' id='LC91'>			<span class="p">});</span></div><div class='line' id='LC92'>		<span class="p">}</span></div><div class='line' id='LC93'>	<span class="p">},</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="nx">buildDataView</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC96'>		<span class="kd">var</span> <span class="nx">me</span>        <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC97'>			<span class="nx">colModel</span>  <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">,</span></div><div class='line' id='LC98'>			<span class="nx">colNum</span>    <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getColNum</span><span class="p">(</span><span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC99'>			<span class="nx">colTpl</span>    <span class="o">=</span> <span class="s1">&#39;&lt;tr class=&quot;x-grid-row {isDirty:this.isRowDirty(parent)}&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC100'>			<span class="nx">cellWidth</span> <span class="o">=</span> <span class="mi">100</span><span class="o">/</span><span class="nx">colNum</span><span class="p">;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>			<span class="kd">var</span> <span class="nx">col</span>   <span class="o">=</span> <span class="nx">colModel</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span></div><div class='line' id='LC104'>				<span class="nx">flex</span>  <span class="o">=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">flex</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC105'>				<span class="nx">width</span> <span class="o">=</span> <span class="nx">flex</span> <span class="o">*</span> <span class="nx">cellWidth</span><span class="p">,</span></div><div class='line' id='LC106'>				<span class="nx">style</span> <span class="o">=</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;padding-right: 10px;&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC107'>				<span class="nx">cls</span>   <span class="o">=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">cls</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>			<span class="nx">style</span> <span class="o">+=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">style</span> <span class="o">||</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>			<span class="k">if</span> <span class="p">(</span><span class="nx">col</span><span class="p">.</span><span class="nx">hidden</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>				<span class="nx">cls</span> <span class="o">+=</span> <span class="s2">&quot;x-grid-col-hidden&quot;</span><span class="p">;</span></div><div class='line' id='LC113'>			<span class="p">}</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>			<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td width=&quot;&#39;</span> <span class="o">+</span> <span class="nx">width</span> <span class="o">+</span> <span class="s1">&#39;%&quot; class=&quot;x-grid-cell x-grid-col-&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">mapping</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">cls</span> <span class="o">+</span> <span class="s1">&#39; {isDirty:this.isCellDirty(parent)}&quot; style=&quot;&#39;</span> <span class="o">+</span> <span class="nx">style</span> <span class="o">+</span> <span class="s1">&#39;&quot; mapping=&quot;&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">mapping</span> <span class="o">+</span> <span class="s1">&#39;&quot; rowIndex=&quot;{rowIndex}&quot;&gt;{&#39;</span> <span class="o">+</span> <span class="nx">col</span><span class="p">.</span><span class="nx">mapping</span> <span class="o">+</span> <span class="s1">&#39;}&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC116'>		<span class="p">}</span></div><div class='line' id='LC117'>		<span class="nx">colTpl</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>		<span class="k">return</span> <span class="k">new</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">DataView</span><span class="p">({</span></div><div class='line' id='LC120'>			<span class="nx">store</span>        <span class="o">:</span> <span class="nx">me</span><span class="p">.</span><span class="nx">store</span><span class="p">,</span></div><div class='line' id='LC121'>			<span class="nx">itemSelector</span> <span class="o">:</span> <span class="s2">&quot;tr.x-grid-row&quot;</span><span class="p">,</span></div><div class='line' id='LC122'>			<span class="nx">simpleSelect</span> <span class="o">:</span> <span class="nx">me</span><span class="p">.</span><span class="nx">multiSelect</span><span class="p">,</span></div><div class='line' id='LC123'>			<span class="nx">scroll</span>       <span class="o">:</span> <span class="nx">me</span><span class="p">.</span><span class="nx">scroll</span><span class="p">,</span></div><div class='line' id='LC124'>			<span class="nx">tpl</span>          <span class="o">:</span> <span class="k">new</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">XTemplate</span><span class="p">(</span></div><div class='line' id='LC125'>				<span class="s1">&#39;&lt;table style=&quot;width: 100%;&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC126'>					<span class="s1">&#39;&lt;tpl for=&quot;.&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC127'>						<span class="nx">colTpl</span><span class="p">,</span></div><div class='line' id='LC128'>					<span class="s1">&#39;&lt;/tpl&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC129'>				<span class="s1">&#39;&lt;/table&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC130'>				<span class="p">{</span></div><div class='line' id='LC131'>					<span class="nx">isRowDirty</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dirty</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>						<span class="k">return</span> <span class="nx">dirty</span> <span class="o">?</span> <span class="s2">&quot;x-grid-row-dirty&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC133'>					<span class="p">},</span></div><div class='line' id='LC134'>					<span class="nx">isCellDirty</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dirty</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>						<span class="k">return</span> <span class="nx">dirty</span> <span class="o">?</span> <span class="s2">&quot;x-grid-cell-dirty&quot;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC136'>					<span class="p">}</span></div><div class='line' id='LC137'>				<span class="p">}</span></div><div class='line' id='LC138'>			<span class="p">),</span></div><div class='line' id='LC139'>			<span class="nx">prepareData</span>  <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">record</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>				<span class="kd">var</span> <span class="nx">column</span><span class="p">,</span></div><div class='line' id='LC141'>					<span class="nx">i</span>  <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC142'>					<span class="nx">ln</span> <span class="o">=</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>				<span class="nx">data</span><span class="p">.</span><span class="nx">dirtyFields</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>				<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ln</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>					<span class="nx">column</span> <span class="o">=</span> <span class="nx">colModel</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC148'>					<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">column</span><span class="p">.</span><span class="nx">renderer</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>						<span class="nx">data</span><span class="p">[</span><span class="nx">column</span><span class="p">.</span><span class="nx">mapping</span><span class="p">]</span> <span class="o">=</span> <span class="nx">column</span><span class="p">.</span><span class="nx">renderer</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">me</span><span class="p">,</span> <span class="p">[</span><span class="nx">data</span><span class="p">[</span><span class="nx">column</span><span class="p">.</span><span class="nx">mapping</span><span class="p">]]);</span></div><div class='line' id='LC150'>					<span class="p">}</span></div><div class='line' id='LC151'>				<span class="p">}</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>				<span class="nx">data</span><span class="p">.</span><span class="nx">isDirty</span> <span class="o">=</span> <span class="nx">record</span><span class="p">.</span><span class="nx">dirty</span><span class="p">;</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>				<span class="nx">data</span><span class="p">.</span><span class="nx">rowIndex</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>				<span class="k">return</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC158'>			<span class="p">},</span></div><div class='line' id='LC159'>			<span class="nx">bubbleEvents</span> <span class="o">:</span> <span class="p">[</span></div><div class='line' id='LC160'>				<span class="s2">&quot;beforeselect&quot;</span><span class="p">,</span></div><div class='line' id='LC161'>				<span class="s2">&quot;containertap&quot;</span><span class="p">,</span></div><div class='line' id='LC162'>				<span class="s2">&quot;itemdoubletap&quot;</span><span class="p">,</span></div><div class='line' id='LC163'>				<span class="s2">&quot;itemswipe&quot;</span><span class="p">,</span></div><div class='line' id='LC164'>				<span class="s2">&quot;itemtap&quot;</span><span class="p">,</span></div><div class='line' id='LC165'>				<span class="s2">&quot;selectionchange&quot;</span></div><div class='line' id='LC166'>			<span class="p">]</span></div><div class='line' id='LC167'>		<span class="p">});</span></div><div class='line' id='LC168'>	<span class="p">},</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>	<span class="c1">// hidden = true to count all columns</span></div><div class='line' id='LC171'>	<span class="nx">getColNum</span>     <span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hidden</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>		<span class="kd">var</span> <span class="nx">me</span>       <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC173'>			<span class="nx">colModel</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">,</span></div><div class='line' id='LC174'>			<span class="nx">colNum</span>   <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>			<span class="kd">var</span> <span class="nx">col</span> <span class="o">=</span> <span class="nx">colModel</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC178'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">hidden</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">col</span><span class="p">.</span><span class="nx">header</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span> <span class="k">continue</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC179'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">col</span><span class="p">.</span><span class="nx">hidden</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC180'>				<span class="nx">colNum</span> <span class="o">+=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">flex</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC181'>			<span class="p">}</span></div><div class='line' id='LC182'>		<span class="p">}</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>		<span class="k">return</span> <span class="nx">colNum</span><span class="p">;</span></div><div class='line' id='LC185'>	<span class="p">},</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>	<span class="nx">getMappings</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC188'>		<span class="kd">var</span> <span class="nx">me</span>       <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC189'>			<span class="nx">mappings</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC190'>			<span class="nx">colModel</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">;</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">colModel</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>			<span class="nx">mappings</span><span class="p">[</span><span class="nx">colModel</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">mapping</span><span class="p">]</span> <span class="o">=</span> <span class="nx">i</span></div><div class='line' id='LC194'>		<span class="p">}</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>		<span class="k">return</span> <span class="nx">mappings</span><span class="p">;</span></div><div class='line' id='LC197'>	<span class="p">},</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>	<span class="nx">toggleColumn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC200'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">index</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>			<span class="kd">var</span> <span class="nx">mappings</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getMappings</span><span class="p">();</span></div><div class='line' id='LC204'>			<span class="nx">index</span> <span class="o">=</span> <span class="nx">mappings</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC205'>		<span class="p">}</span></div><div class='line' id='LC206'>		<span class="kd">var</span> <span class="nx">el</span>      <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getEl</span><span class="p">(),</span></div><div class='line' id='LC207'>			<span class="nx">mapping</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">mapping</span><span class="p">,</span></div><div class='line' id='LC208'>			<span class="nx">cells</span>   <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">query</span><span class="p">(</span><span class="s2">&quot;td.x-grid-col-&quot;</span><span class="o">+</span><span class="nx">mapping</span><span class="p">);</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="nx">cells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">c</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC211'>			<span class="kd">var</span> <span class="nx">cellEl</span> <span class="o">=</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">cells</span><span class="p">[</span><span class="nx">c</span><span class="p">]);</span></div><div class='line' id='LC212'>			<span class="k">if</span> <span class="p">(</span><span class="nx">cellEl</span><span class="p">.</span><span class="nx">hasCls</span><span class="p">(</span><span class="s2">&quot;x-grid-col-hidden&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC213'>				<span class="nx">cellEl</span><span class="p">.</span><span class="nx">removeCls</span><span class="p">(</span><span class="s2">&quot;x-grid-col-hidden&quot;</span><span class="p">);</span></div><div class='line' id='LC214'>				<span class="k">this</span><span class="p">.</span><span class="nx">colModel</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">hidden</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC215'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC216'>				<span class="nx">cellEl</span><span class="p">.</span><span class="nx">addCls</span><span class="p">(</span><span class="s2">&quot;x-grid-col-hidden&quot;</span><span class="p">);</span></div><div class='line' id='LC217'>				<span class="k">this</span><span class="p">.</span><span class="nx">colModel</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">hidden</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC218'>			<span class="p">}</span></div><div class='line' id='LC219'>		<span class="p">}</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="nx">me</span><span class="p">.</span><span class="nx">updateWidths</span><span class="p">();</span></div><div class='line' id='LC222'>	<span class="p">},</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>	<span class="nx">updateWidths</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC225'>		<span class="kd">var</span> <span class="nx">me</span>          <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC226'>			<span class="nx">el</span>          <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getEl</span><span class="p">(),</span></div><div class='line' id='LC227'>			<span class="nx">headerWidth</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">header</span><span class="p">.</span><span class="nx">getEl</span><span class="p">().</span><span class="nx">getWidth</span><span class="p">(),</span></div><div class='line' id='LC228'>			<span class="nx">colModel</span>    <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">colModel</span><span class="p">,</span></div><div class='line' id='LC229'>			<span class="nx">cells</span>       <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">query</span><span class="p">(</span><span class="s2">&quot;td.x-grid-cell&quot;</span><span class="p">),</span></div><div class='line' id='LC230'>			<span class="nx">colNum</span>      <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getColNum</span><span class="p">(</span><span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC231'>			<span class="nx">cellWidth</span>   <span class="o">=</span> <span class="mi">100</span> <span class="o">/</span> <span class="nx">colNum</span><span class="p">,</span></div><div class='line' id='LC232'>			<span class="nx">mappings</span>    <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getMappings</span><span class="p">();</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">c</span> <span class="o">&lt;</span> <span class="nx">cells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">c</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>			<span class="kd">var</span> <span class="nx">cellEl</span>  <span class="o">=</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">cells</span><span class="p">[</span><span class="nx">c</span><span class="p">]),</span></div><div class='line' id='LC236'>				<span class="nx">mapping</span> <span class="o">=</span> <span class="nx">cellEl</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;mapping&quot;</span><span class="p">),</span></div><div class='line' id='LC237'>				<span class="nx">col</span>     <span class="o">=</span> <span class="nx">colModel</span><span class="p">[</span><span class="nx">mappings</span><span class="p">[</span><span class="nx">mapping</span><span class="p">]],</span></div><div class='line' id='LC238'>				<span class="nx">flex</span>    <span class="o">=</span> <span class="nx">col</span><span class="p">.</span><span class="nx">flex</span> <span class="o">||</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC239'>				<span class="nx">width</span>   <span class="o">=</span> <span class="nx">flex</span> <span class="o">*</span> <span class="nx">cellWidth</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">headerWidth</span><span class="p">;</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>			<span class="nx">cellEl</span><span class="p">.</span><span class="nx">setWidth</span><span class="p">(</span><span class="nx">width</span><span class="p">);</span></div><div class='line' id='LC242'>		<span class="p">}</span></div><div class='line' id='LC243'>	<span class="p">},</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>	<span class="nx">scrollToRow</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>		<span class="kd">var</span> <span class="nx">me</span>       <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC247'>			<span class="nx">el</span>       <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getEl</span><span class="p">(),</span></div><div class='line' id='LC248'>			<span class="nx">rows</span>     <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">query</span><span class="p">(</span><span class="s2">&quot;tr.x-grid-row&quot;</span><span class="p">),</span></div><div class='line' id='LC249'>			<span class="nx">rowEl</span>    <span class="o">=</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">rows</span><span class="p">[</span><span class="nx">index</span><span class="p">]),</span></div><div class='line' id='LC250'>			<span class="nx">scroller</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">dataview</span><span class="p">.</span><span class="nx">scroller</span><span class="p">;</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>		<span class="kd">var</span> <span class="nx">pos</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC253'>			<span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC254'>			<span class="nx">y</span><span class="o">:</span> <span class="nx">rowEl</span><span class="p">.</span><span class="nx">dom</span><span class="p">.</span><span class="nx">offsetTop</span></div><div class='line' id='LC255'>		<span class="p">};</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>		<span class="nx">scroller</span><span class="p">.</span><span class="nx">scrollTo</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC258'>	<span class="p">},</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>	<span class="nx">getView</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC261'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>		<span class="k">return</span> <span class="nx">me</span><span class="p">.</span><span class="nx">dataview</span><span class="p">;</span></div><div class='line' id='LC264'>	<span class="p">},</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>	<span class="nx">bindStore</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">store</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>		<span class="kd">var</span> <span class="nx">me</span>   <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC268'>			<span class="nx">view</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getView</span><span class="p">();</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>		<span class="nx">view</span><span class="p">.</span><span class="nx">bindStore</span><span class="p">(</span><span class="nx">store</span><span class="p">);</span></div><div class='line' id='LC271'>	<span class="p">},</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>	<span class="nx">getStore</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC274'>		<span class="kd">var</span> <span class="nx">me</span>   <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC275'>			<span class="nx">view</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getView</span><span class="p">();</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>		<span class="k">return</span> <span class="nx">view</span><span class="p">.</span><span class="nx">getStore</span><span class="p">();</span></div><div class='line' id='LC278'>	<span class="p">},</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>	<span class="nx">getRow</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>		<span class="kd">var</span> <span class="nx">me</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC282'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">index</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>			<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getStore</span><span class="p">(),</span></div><div class='line' id='LC284'>				<span class="nx">index</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC285'>		<span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>		<span class="kd">var</span> <span class="nx">el</span>   <span class="o">=</span> <span class="nx">me</span><span class="p">.</span><span class="nx">getEl</span><span class="p">(),</span></div><div class='line' id='LC288'>			<span class="nx">rows</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">query</span><span class="p">(</span><span class="s2">&quot;tr&quot;</span><span class="p">);</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>		<span class="k">return</span> <span class="nx">rows</span><span class="p">[</span><span class="nx">index</span><span class="o">+</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC291'>	<span class="p">}</span></div><div class='line' id='LC292'><span class="p">});</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'><span class="nx">Ext</span><span class="p">.</span><span class="nx">reg</span><span class="p">(</span><span class="s2">&quot;touchgridpanel&quot;</span><span class="p">,</span> <span class="nx">Ext</span><span class="p">.</span><span class="nx">ux</span><span class="p">.</span><span class="nx">TouchGridPanel</span><span class="p">);</span></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        
          <div class="sponsor">
            <a href="http://www.rackspace.com" class="logo">
              <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
            </a>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
        

        <ul class="links">
          
            <li class="blog"><a href="https://github.com/blog">Blog</a></li>
            <li><a href="https://github.com/about">About</a></li>
            <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
            <li><a href="https://github.com/training">Training</a></li>
            <li><a href="http://jobs.github.com">Job Board</a></li>
            <li><a href="http://shop.github.com">Shop</a></li>
            <li><a href="http://developer.github.com">API</a></li>
            <li><a href="http://status.github.com">Status</a></li>
          
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.05744s from fe1.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    <script>window._auth_token = "094341dc02f206e2a2481ae818fcdc95a33b6ebb"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    
    
    <script type="text/javascript">(function(){var d=document;var e=d.createElement("script");e.async=true;e.src="https://d1ros97qkrwjf5.cloudfront.net/14/eum/rum.js	";e.type="text/javascript";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();NREUMQ.push(["nrf2","beacon-1.newrelic.com","2f94e4d8c2",64799,"dw1bEBZcX1RWRhoEClsAGhcMXEQ=",0.0,53,new Date().getTime()])</script>
  </body>
</html>

