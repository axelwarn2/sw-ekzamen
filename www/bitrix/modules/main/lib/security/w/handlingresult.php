<? namespace Bitrix\Main\Security\W; use Bitrix\Main\Security\W\Rules\Rule; use Bitrix\Main\Security\W\Rules\Results\RuleResult; class HandlingResult{ protected string $_1157241814; protected array $_1049023819; protected RuleResult $_97820490; protected Rule $_425842693;  public function __construct(string $_1157241814, array $_1049023819, RuleResult $_97820490, Rule $_425842693){ $this->_1157241814= $_1157241814; $this->_1049023819= $_1049023819; $this->_97820490= $_97820490; $this->_425842693= $_425842693;} public function getContextName(): string{ return $this->_1157241814;} public function setContextName(string $_1157241814): void{ $this->_1157241814= $_1157241814;} public function getContextKey(): array{ return $this->_1049023819;} public function setContextKey(array $_1049023819): void{ $this->_1049023819= $_1049023819;} public function getRuleResult(): RuleResult{ return $this->_97820490;} public function setRuleResult(RuleResult $_97820490): void{ $this->_97820490= $_97820490;} public function getRule(): Rule{ return $this->_425842693;} public function setRule(Rule $_425842693): void{ $this->_425842693= $_425842693;}}?>