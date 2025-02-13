{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{extends file=$layout}

{block name='head_seo' prepend}
  <link rel="canonical" href="{$product.canonical_url}">
{/block}

{block name='head' append}
  <meta property="og:type" content="product">
  <meta property="og:url" content="{$urls.current_url}">
  <meta property="og:title" content="{$page.meta.title}">
  <meta property="og:site_name" content="{$shop.name}">
  <meta property="og:description" content="{$page.meta.description}">
  <meta property="og:image" content="{$product.cover.large.url}">
  <meta property="product:pretax_price:amount" content="{$product.price_tax_exc}">
  <meta property="product:pretax_price:currency" content="{$currency.iso_code}">
  <meta property="product:price:amount" content="{$product.price_amount}">
  <meta property="product:price:currency" content="{$currency.iso_code}">
  {if isset($product.weight) && ($product.weight != 0)}
  <meta property="product:weight:value" content="{$product.weight}">
  <meta property="product:weight:units" content="{$product.weight_unit}">
  {/if}
{/block}

{block name='content'}

  <section id="main" itemscope itemtype="https://schema.org/Product">
    <meta itemprop="url" content="{$product.url}">

    <div class="row">
      <div class="col-md-5">
        {block name='page_content_container'}
          <section class="page-content" id="content">
            <div class="product-leftside">
			{block name='page_content'}
              {block name='product_flags'}
                <ul class="product-flags">
                  {foreach from=$product.flags item=flag}
                    <li class="product-flag {$flag.type}">{$flag.label}</li>
                  {/foreach}
                </ul>
              {/block}

              {block name='product_cover_thumbnails'}
                {include file='catalog/_partials/product-cover-thumbnails.tpl'}
              {/block}
              <div class="scroll-box-arrows">
                <i class="material-icons left">&#xE314;</i>
                <i class="material-icons right">&#xE315;</i>
			</div>

            {/block}
          </section>
        {/block}
        </div>
        <div class="col-md-7">
          {block name='page_header_container'}
            {block name='page_header'}
              <h1 class="productpage_title" itemprop="name">{block name='page_title'}{$product.name}{/block}</h1>
            {/block}
          {/block}
 {capture name='displayProductListReviews'}{hook h='displayProductListReviews' product=$product}{/capture}
          {if $smarty.capture.displayProductListReviews}
            <div class="hook-reviews">
            {hook h='displayProductListReviews' product=$product}
            </div>
          {/if}
         

          {block name='product_prices'}
            {include file='catalog/_partials/product-prices.tpl'}
          {/block}
 <div class="product-information">
            {block name='product_description_short'}
              <div id="product-description-short-{$product.id}" itemprop="description">{$product.description_short nofilter}</div>
            {/block}
            {if $product.is_customizable && count($product.customizations.fields)}
              {block name='product_customization'}
                {include file="catalog/_partials/product-customization.tpl" customizations=$product.customizations}
              {/block}
            {/if}

            <div class="product-actions">
              {block name='product_buy'}
                <form action="{$urls.pages.cart}" method="post" id="add-to-cart-or-refresh">
                  <input type="hidden" name="token" value="{$static_token}">
                  <input type="hidden" name="id_product" value="{$product.id}" id="product_page_product_id">
                  <input type="hidden" name="id_customization" value="{$product.id_customization}" id="product_customization_id">

                  {block name='product_variants'}
                    {include file='catalog/_partials/product-variants.tpl'}
                  {/block}

                  {block name='product_pack'}
                    {if $packItems}
                      <section class="product-pack">
                        <h3 class="h4">{l s='This pack contains' d='Shop.Theme.Catalog'}</h3>
                        {foreach from=$packItems item="product_pack"}
                          {block name='product_miniature'}
                            {include file='catalog/_partials/miniatures/pack-product.tpl' product=$product_pack}
                          {/block}
                        {/foreach}
                    </section>
                    {/if}
                  {/block}

                  {block name='product_discounts'}
                    {include file='catalog/_partials/product-discounts.tpl'}
                  {/block}

                  {block name='product_add_to_cart'}
                    {include file='catalog/_partials/product-add-to-cart.tpl'}
                  {/block}

            
                  {block name='product_additional_info'}
                    {include file='catalog/_partials/product-additional-info.tpl'}
                  {/block}

                  {* Input to refresh product HTML removed, block kept for compatibility with themes *}
                  {block name='product_refresh'}{/block}
                </form>
              {/block}

            </div>

            {block name='hook_display_reassurance'}
            {hook h='displayReassurance'}
            {/block}
        </div>
      </div>
    </div>
	
	{* LOONES 22/04/2019 - Tab Layout 
	<section class="product-tabcontent">	
	 {block name='product_tabs'}	
		<div class="tabs">
              <ul class="nav nav-tabs">
                {if $product.description}
                <li class="nav-item">
                  <a class="nav-link{if $product.description} active{/if}" data-toggle="tab" href="#description"  role="tab"
                         aria-controls="description"
                         {if $product.description} aria-selected="true"{/if}>{l s='Description' d='Shop.Theme.Catalog'}</a>
                </li>
                {/if}
                <li class="nav-item">
                  <a class="nav-link{if !$product.description} active{/if}" data-toggle="tab" href="#product-details"  {if !$product.description} aria-selected="true"{/if}>{l s='Product Details' d='Shop.Theme.Catalog'}</a>
                </li>
                {if $product.attachments}
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#attachments"   role="tab"
                        aria-controls="attachments">{l s='Attachments' d='Shop.Theme.Catalog'}</a>
                </li>
                {/if}
                
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#rating">{l s='rating' d='Shop.Theme.Catalog'}</a>
                </li>
              
                {foreach from=$product.extraContent item=extra key=extraKey}
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#extra-{$extraKey}"  role="tab"
                        aria-controls="extra-{$extraKey}">{$extra.title}</a>
                </li>
                {/foreach}
              </ul>

              <div class="tab-content" id="tab-content">
               <div class="tab-pane fade in{if $product.description} active{/if}" id="description" role="tabpanel">
                 {block name='product_description'}
                   <div class="product-description">{$product.description nofilter}</div>
                 {/block}
               </div>

               {block name='product_details'}
                 {include file='catalog/_partials/product-details.tpl'}
               {/block}

               {block name='product_attachments'}
                 {if $product.attachments}
                    <div class="tab-pane fade in" id="attachments" role="tabpanel">
                     <section class="product-attachments">
                       <h3 class="h5 text-uppercase">{l s='Download' d='Shop.Theme.Actions'}</h3>
                       {foreach from=$product.attachments item=attachment}
                         <div class="attachment">
                           <h4><a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">{$attachment.name}</a></h4>
                           <p>{$attachment.description}</p>
                           <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                             {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                           </a>
                         </div>
                       {/foreach}
                     </section>
                   </div>
                 {/if}
               {/block}

                 <div class="tab-pane fade in" id="rating"></div>

               {foreach from=$product.extraContent item=extra key=extraKey}
                 <div class="tab-pane fade in {$extra.attr.class}" id="extra-{$extraKey}" role="tabpanel" {foreach $extra.attr as $key => $val} {$key}="{$val}"{/foreach}>
                   {$extra.content nofilter}
               </div>
               {/foreach}
            </div>
          </div>
	 {/block}
	</section>*}

  {* LOONES 22/04/2019 - Responsive Row Layout*}

  <br>
  <section>	
	 {block name='product_properties'}	
		<div class="row mt-2">
      
      {* Product Description *}
      {block name="product_description"}
        <!--<h2>{l s='Description' d='Shop.Theme.Catalog'}</h2>-->
        <h2>{l s='Product Details' d='Shop.Theme.Catalog'}</h2>
        <div id="description">
          <div class="product-description">
            {$product.description nofilter}
          </div>
        </div>
      {/block}
      
      {block name="product_details"}
        {include file='catalog/_partials/product-details.tpl'}
      {/block}

      {* Product Attachment Files *}
      {block name='product_attachments'}
          {if $product.attachments}
            <h2>{l s='Attachments Files' d='Shop.Theme.Catalog'}</h2>
           <div class="tab-pane fade in" id="attachments" role="tabpanel">
            <section class="product-attachments">
              <h3 class="h5 text-uppercase">{l s='Download' d='Shop.Theme.Actions'}</h3>
              {foreach from=$product.attachments item=attachment}
                <div class="attachment">
                  <h4><a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">{$attachment.name}</a></h4>
                  <p>{$attachment.description}</p>
                  <a href="{url entity='attachment' params=['id_attachment' => $attachment.id_attachment]}">
                    {l s='Download' d='Shop.Theme.Actions'} ({$attachment.file_size_formatted})
                  </a>
                </div>
              {/foreach}
            </section>
          </div>
        {/if}
      {/block}<br>

      {* Product Rating *}
      {block name="product_rating"}
        {if $product.rating}
          <h2>{l s='Rating' d='Shop.Theme.Catalog'}</h2>
          <div id="rating">
            {$product.rating}
          </div>
        {/if}  
      {/block} <br><br>
      
      {block name="extra_content"}
        
        <h2>{l s='Seller information' d='Shop.Theme.Catalog'}</h2>
        <br>
        {foreach from=$product.extraContent item=extra key=extraKey}
            {$extra.content nofilter}
        {/foreach}
      {/block}

      </div>
    </div>
	 {/block}
	</section>

  {* FIN LOONES *}
	
    {block name='product_accessories'}
      {if $accessories}
        {assign var='sliderFor' value=5} <!-- Define Number of product for SLIDER -->
		{assign var='productCount' value=count($accessories)}
		
		<section class="product-accessories clearfix">
      <div class="tab-main-title">
          <h2 class="h1 products-section-title text-uppercase">
		  {l s='You might also like' d='Shop.Theme.Catalog'}
		  </h2>
    </div>
      <div id="spe_res">
         <div class="products"> 
		 	{if $productCount >= $sliderFor}
				<ul id="accessories-carousel" class="tm-carousel product_list">
			{else}
				<ul id="accessories-grid" class="accessories_grid product_list grid row gridcount">
			{/if}
			{foreach from=$accessories item="product_accessory"}
              {block name='product_miniature'}
                <li class="{if $productCount >= $sliderFor}item{else}product_item col-xs-12 col-sm-6 col-md-4 col-lg-3{/if}">
				{include file='catalog/_partials/miniatures/product.tpl' product=$product_accessory}
				</li>
              {/block}
            {/foreach}
			</ul>
			
			{if $productCount >= $sliderFor}
				<div class="customNavigation">
					<a class="btn prev accessories_prev">&nbsp;</a>
					<a class="btn next accessories_next">&nbsp;</a>
				</div>
			{/if}
			
          </div>
          </div>
        </section>
      {/if}
    {/block}

    {block name='product_footer'}
      {hook h='displayFooterProduct' product=$product category=$category}
    {/block}

    {block name='product_images_modal'}
      {include file='catalog/_partials/product-images-modal.tpl'}
    {/block}

    {block name='page_footer_container'}
      <footer class="page-footer">
        {block name='page_footer'}
          <!-- Footer content -->
        {/block}
      </footer>
    {/block}
  </section>

{/block}
