<?php
///-build_id: 2017010307.5027
/// This source file is subject to the Software License Agreement that is bundled with this 
/// package in the file license.txt, or you can get it here
/// http://addons-modules.com/en/content/3-terms-and-conditions-of-use
///
/// @copyright  2009-2016 Addons-Modules.com
///  If you need open code to customize or merge code with othe modules, please contact us.
include_once(_PS_ROOT_DIR_ . '/modules/agilesellerratings/agilesellerratings.php');
include_once(_PS_ROOT_DIR_ . '/modules/agilesellerratings/AgileRating.php');

class AdminSellerRatingsController extends ModuleAdminController
{    
	public function __construct()   {    $this->bootstrap = true;   $this->table = 'agile_rating';     $this->className = 'AgileRating';      parent::__construct();      if(!$this->is_seller)    {     $this->addRowAction('delete');       }                    $this->fields_list = array(     'id_agile_rating' => array('title' => $this->l('ID'), 'align' => 'center', 'width' => 25),     'id_target' => array('title' => $this->l('Seller ID'), 'align' => 'center', 'width' => 25),     'id_order' => array('title' => $this->l('Order ID'), 'align' => 'center', 'width' => 25),     'id_customer' => array('title' => $this->l('Customer ID'), 'align' => 'center', 'width' => 25),     'grade' => array('title' => $this->l('Rating'), 'align' => 'center', 'width' => 25),     'content' => array('title' => $this->l('Comment'),  'align' => 'left', 'width' => 250),     'date_add' => array('title' => $this->l('Date'), 'align' => 'center', 'width' => 25)    );       }      public function initToolbar()   {    parent::initToolbar();    unset($this->toolbar_btn['new']);   }     public function processSave()  {   $_POST['content'] = $_POST['message'];   parent::processSave();  }      public function processUpdate()  {   $RF71F9F70BCEFBFFFBDF1B8ADD577AE20 = Db::getInstance()->ExecuteS('SELECT * FROM ' . _DB_PREFIX_ .'agile_rating_criterion');   $R74B97A2D41AB3ADC66BF2A1A28293415 = 0;   foreach($RF71F9F70BCEFBFFFBDF1B8ADD577AE20 as $RBBEAD13A7562B88D638908AF9AB5F8C1)   {    $R0AF750EE2CEFDB488675D9F23229CD30 = (int)Tools::getValue('criterion_' . $RBBEAD13A7562B88D638908AF9AB5F8C1['id_agile_rating_criterion']);    $R74B97A2D41AB3ADC66BF2A1A28293415 = $R74B97A2D41AB3ADC66BF2A1A28293415 + $R0AF750EE2CEFDB488675D9F23229CD30;    $R130D64A4AD653C91E0FD80DE8FEADC3A = 'UPDATE ' . _DB_PREFIX_ . 'agile_rating_grade SET grade=' . $R0AF750EE2CEFDB488675D9F23229CD30 . ' WHERE id_agile_rating_criterion =' . (int)$RBBEAD13A7562B88D638908AF9AB5F8C1['id_agile_rating_criterion'] . ' AND id_agile_rating=' . (int)Tools::getValue('id_agile_rating');    Db::getInstance()->Execute($R130D64A4AD653C91E0FD80DE8FEADC3A);   }   $R74B97A2D41AB3ADC66BF2A1A28293415 =  $R74B97A2D41AB3ADC66BF2A1A28293415 / count($RF71F9F70BCEFBFFFBDF1B8ADD577AE20);   $_POST['grade'] = $R74B97A2D41AB3ADC66BF2A1A28293415;    parent::processUpdate();  }       public function renderForm()   {    if (!($R602BAA072843820A45861C75C510C77E = $this->loadObject(true)))     return;      $this->fields_form = array(     'legend' => array(       'title' => $this->l('Rating Details')       ),      'input' => array(       array(        'type' => 'text',        'label' => $this->l('Customer'),        'name' => 'customer',        'size' => 33,        'required' => false        ),       array(        'type' => 'date',        'label' => $this->l('Date Added'),        'name' => 'date_add',        'size' => 33,        'required' => false        ),       array(        'type' => 'text',        'label' => $this->l('Average Rating'),        'name' => 'grade',        'size' => 33,        'required' => false,        'readonly' => true        ),       array(        'type' => 'textarea',        'label' => $this->l('Message'),        'name' => 'content',        'rows' => 10,        'cols' => 100,        'required' => false        ),       array(        'type' => 'textarea',        'label' => $this->l('Response'),        'name' => 'response',        'rows' => 10,        'cols' => 100,        'required' => false        ),       array(        'type' => 'grades',        'label' => $this->l('Ratings(0-5)'),        'name' => 'grades',        ),       )      );      $this->fields_form['submit'] = array(     'title' => $this->l('Save'),     'class' => 'agile-btn agile-btn-default pull-right'     );        $R130D64A4AD653C91E0FD80DE8FEADC3A = 'SELECT *       FROM ' . _DB_PREFIX_ . 'agile_rating_grade g       LEFT JOIN ' . _DB_PREFIX_ . 'agile_rating_criterion c ON g.id_agile_rating_criterion = c.id_agile_rating_criterion       LEFT JOIN ' . _DB_PREFIX_ . 'agile_rating_criterion_lang cl ON (c.id_agile_rating_criterion = cl.id_agile_rating_criterion AND cl.id_lang = ' . $this->context->cookie->id_lang . ')      WHERE id_agile_rating=' . (int)$R602BAA072843820A45861C75C510C77E->id;    $R998B94EF30ED4BEAA40215E72DF7BE43 = Db::getInstance()->ExecuteS($R130D64A4AD653C91E0FD80DE8FEADC3A);      $this->tpl_form_vars = array(     'the_rating' => $R602BAA072843820A45861C75C510C77E     ,'the_grades' => $R998B94EF30ED4BEAA40215E72DF7BE43     );           return parent::renderForm();   }       }      